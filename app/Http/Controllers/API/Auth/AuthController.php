<?php

namespace App\Http\Controllers\API\Auth;

use App\Enums\Roles;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\CustomerRepository;
use App\Repositories\DeviceKeyRepository;
use App\Repositories\UserRepository;
use App\Repositories\VerificationCodeRepository;
use App\Repositories\WalletRepository;
use App\Services\SmsGatewayService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Kreait\Laravel\Firebase\Facades\Firebase;

class AuthController extends Controller
{

    protected $firebaseauth;
    public function __construct()
    {
        $this->firebaseauth = Firebase::auth();
    }

    /**
     * Register a new user and return the registration result.
     *
     * @param  RegistrationRequest  $request  The registration request data
     * @return Some_Return_Value The registration result data
     */
    public function register(RegistrationRequest $request)
    {
        $user = $this->firebaseauth->createUserWithEmailAndPassword($request->email, $request->password);

        // Create a new user
        $user = UserRepository::registerNewUser($request,$user->uid);

        if ($request->device_key) {
            DeviceKeyRepository::storeByRequest($user, $request);
        }

        // Create a new customer
        CustomerRepository::storeByRequest($user);

        //create wallet
        WalletRepository::storeByRequest($user);

        // Create a new verification code
        $verificationCode = VerificationCodeRepository::findOrCreateByContact($user->phone);

        $user->assignRole(Roles::CUSTOMER->value);

        $OTP = app()->environment('local') ? $verificationCode->otp : null;

        $message = 'Your Verification OTP is ' . $verificationCode->otp;

        try {
            (new SmsGatewayService)->sendSMS($user->phone, $message);
        } catch (\Throwable $th) {
            //throw $th;
        }

        return $this->json('Registration successfully complete', [
            'user' => new UserResource($user),
            'access' => UserRepository::getAccessToken($user),
            'otp' => $OTP,
        ]);
    }

    /**
     * Login a user.
     *
     * @param  LoginRequest  $request  The login request data
     */
    public function login(LoginRequest $request)
    {
        // Authenticate the user
        $signInResult = $this->firebaseauth->signInWithEmailAndPassword($request['phone'], $request['password']);
        
        $user = $this->authenticate($request,$signInResult->data()['localId']);
        if ($user?->customer) {

            if ($request->device_key) {
                DeviceKeyRepository::storeByRequest($user, $request);
            }

            return $this->json('Login successfully', [
                'user' => new UserResource($user),
                'access' => UserRepository::getAccessToken($user),
            ]);
        }

        return $this->json('Credential is invalid!', [], Response::HTTP_BAD_REQUEST);
    }

    public function googleLogin(Request $request)
    {
        try {
            
            $uniquePhoneNumber = '9' . str_pad(random_int(100000000, 999999999), 9, '0', STR_PAD_LEFT);
            $verifiedIdToken = $this->firebaseauth->verifyIdToken($request->token);
            $firebaseUserId = $verifiedIdToken->claims()->get('sub');
            // dd($verifiedIdToken->claims());
            // You can now find or create a user in your Laravel system based on Firebase UID
            $user = User::firstOrCreate([
                'uid' => $firebaseUserId,
            ], [
                'email' => $verifiedIdToken->claims()->get('email'),
                'name' => $verifiedIdToken->claims()->get('name'),
                'phone' =>  (int)$uniquePhoneNumber,
                'password' => Hash::make('123456')

            ]);
            // dd($user);
            $user = $this->googleAuthenticate($firebaseUserId);
            if ($user) {

                if ($request->device_key) {
                    DeviceKeyRepository::storeByRequest($user, $request);
                }
    
                return $this->json('Login successfully', [
                    'user' => new UserResource($user),
                    'access' => UserRepository::getAccessToken($user),
                ]);
            }
            // Create a session or return a Laravel Sanctum token
            return response()->json(['message' => 'Logged in', 'user' => $user], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function facebookLogin(Request $request)
    {
        try {
            $uniquePhoneNumber = '9' . str_pad(random_int(100000000, 999999999), 9, '0', STR_PAD_LEFT);
            $verifiedIdToken = $this->firebaseauth->verifyIdToken($request->token);
            $firebaseUserId = $verifiedIdToken->claims()->get('sub');
            // You can now find or create a user in your Laravel system based on Firebase UID
            $user = User::firstOrCreate([
                'uid' => $firebaseUserId,
            ], [
                'email' => $verifiedIdToken->claims()->get('email'),
                'name' => $verifiedIdToken->claims()->get('name'),
                'phone' =>  (int)$uniquePhoneNumber,
                'password' => Hash::make('123456')

            ]);
            // dd($user);
            $user = $this->facebookAuthenticate($firebaseUserId);
            if ($user) {

                if ($request->device_key) {
                    DeviceKeyRepository::storeByRequest($user, $request);
                }
    
                return $this->json('Login successfully', [
                    'user' => new UserResource($user),
                    'access' => UserRepository::getAccessToken($user),
                ]);
            }
            // Create a session or return a Laravel Sanctum token
            return response()->json(['message' => 'Logged in', 'user' => $user], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
   
    public function appleLogin(Request $request)
    {
        try {
            $verifiedIdToken = $this->firebaseauth->verifyIdToken($request->token);
            $firebaseUserId = $verifiedIdToken->claims()->get('sub');
            // dd($verifiedIdToken->claims());
            // You can now find or create a user in your Laravel system based on Firebase UID
            $user = User::firstOrCreate([
                'uid' => $firebaseUserId,
            ], [
                'email' => $verifiedIdToken->claims()->get('email'),
                'name' => $verifiedIdToken->claims()->get('name'),
                'phone' =>  rand(7,7),
                'password' => Hash::make('123456')

            ]);
            // dd($user);
            $user = $this->appleAuthenticate($firebaseUserId);
            if ($user) {

                if ($request->device_key) {
                    DeviceKeyRepository::storeByRequest($user, $request);
                }
    
                return $this->json('Login successfully', [
                    'user' => new UserResource($user),
                    'access' => UserRepository::getAccessToken($user),
                ]);
            }
            // Create a session or return a Laravel Sanctum token
            return response()->json(['message' => 'Logged in', 'user' => $user], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    /**
     * Authenticate the user and return the user.
     *
     * @param  LoginRequest  $request  The login request
     * @return User|null
     */
    private function authenticate(LoginRequest $request,$uid = null)
    {
        $user = UserRepository::findByPhone($request->phone,$uid);
        if (! is_null($user) && Hash::check($request->password, $user->password)) {
            return $user;
        }

        return null;
    }

    private function googleAuthenticate($uid)
    {
        $user = UserRepository::findByGoogle($uid);
        if (! is_null($user)) {
            return $user;
        }
        return null;
    }
    
    private function facebookAuthenticate($uid)
    {
        $user = UserRepository::findByFacebook($uid);
        if (! is_null($user)) {
            return $user;
        }
        return null;
    }
    
    private function appleAuthenticate($uid)
    {
        $user = UserRepository::findByApple($uid);
        if (! is_null($user)) {
            return $user;
        }
        return null;
    }

    /**
     * Logout the user and revoke the token.
     *
     * @model User $user
     *
     * @return string
     */
    public function logout()
    {
        $user = auth()->user();

        if ($user) {
            $user->currentAccessToken()->delete();

            return $this->json('Logged out successfully!');
        }

        return $this->json('User not found!', [], Response::HTTP_NOT_FOUND);
    }
}
