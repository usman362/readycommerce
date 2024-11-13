<template>
    <div>
        <TransitionRoot as="template" :show="AuthStore.loginModal">
            <Dialog as="div" class="relative z-10" @close="AuthStore.hideLoginModal()">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all my-8 md:my-0 w-full sm:max-w-lg md:max-w-xl">
                                <div class="bg-white p-5 sm:p-8 relative">
                                    <!-- close button -->
                                    <div class="w-9 h-9 bg-slate-100 rounded-[32px] absolute top-4 right-4 flex justify-center items-center cursor-pointer"
                                        @click="AuthStore.hideLoginModal()">
                                        <XMarkIcon class="w-6 h-6 text-slate-600" />
                                    </div>
                                    <!-- end close button -->

                                    <div class="text-slate-950 text-lg sm:text-2xl font-medium leading-loose">{{
                                        $t('Welcome') }}!
                                    </div>

                                    <div class="text-slate-950 text-lg font-normal leading-7 tracking-tight mt-3">
                                        {{ $t('Please Login to continue') }}
                                    </div>

                                    <!-- Phone Number -->
                                    <div class="mt-8">
                                        <label class="text-slate-700 text-base font-normal leading-normal mb-2 block">
                                            {{ $t('Email / Phone Number') }}
                                        </label>

                                        <input type="text" v-model="loginFormData.phone"
                                            :placeholder="$t('Enter email or phone number')"
                                            class="text-base font-normal w-full p-3 placeholder:text-slate-400 rounded-lg border  focus:border-primary outline-none"
                                            :class="errors && errors?.phone ? 'border-red-500' : 'border-slate-200'">
                                        <span v-if="errors && errors?.phone" class="text-red-500 text-sm">{{
                                            errors?.phone[0] }}</span>
                                    </div>

                                    <!-- Password -->
                                    <div class="mt-4">
                                        <label class="text-slate-700 text-base font-normal leading-normal mb-2 block">{{
                                            $t('Password') }}</label>

                                        <div class="relative">
                                            <input :type="showLoginPassword ? 'text' : 'password'"
                                                v-model="loginFormData.password" :placeholder="$t('Enter Password')"
                                                class="text-base font-normal w-full p-3 placeholder:text-slate-400 rounded-lg border focus:border-primary outline-none"
                                                :class="errors && errors?.password ? 'border-red-500' : 'border-slate-200'">
                                            <button @click="showLoginPassword = !showLoginPassword">
                                                <EyeIcon v-if="showLoginPassword"
                                                    class="w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2" />
                                                <EyeSlashIcon v-else
                                                    class="w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2" />
                                            </button>
                                        </div>
                                        <span v-if="errors && errors?.password" class="text-red-500 text-sm">{{
                                            errors?.password[0] }}</span>
                                    </div>

                                    <!-- Forgot Password -->
                                    <div class="mt-4 text-right">
                                        <button class="text-right text-slate-700 text-base font-normal leading-normal"
                                            @click="showForgetPasswordDilog()">
                                            {{ $t('Forgot Password') }}?
                                        </button>
                                    </div>

                                    <!-- login button -->
                                    <button
                                        class="px-6 py-4 bg-primary mt-8 rounded-[10px] text-white text-base font-medium w-full"
                                        @click="loginFormSubmit">
                                        {{ $t('Log in') }}
                                    </button>
                                    <center>
                                        <button class="loginBtn loginBtn--google" @click="loginWithGoogle">Login with Google</button>
    
                                        <button class="loginBtn loginBtn--facebook" @click="loginWithFacebook">Login with Facebook</button>
    
                                        <button class="loginBtn loginBtn--apple" @click="loginWithApple">Login with Apple</button>
                                    </center>

                                    <div class="px-4 py-2 mt-6 flex items-center justify-center gap-2">
                                        <div class="text-slate-900 text-base font-normal">
                                            {{ $t('Don’t have an account') }}?
                                        </div>
                                        <button class="text-primary text-base font-normal" @click="showRegisterDilog">
                                            {{ $t('Sign Up') }}
                                        </button>
                                    </div>

                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Forget Password Dialog Modal -->
        <TransitionRoot as="template" :show="forgetPasswordDilog">
            <Dialog as="div" class="relative z-10" @close="forgetPasswordDilog = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class="relative transform rounded-2xl overflow-hidden bg-white text-left shadow-xl transition-all my-8 md:my-0 w-full sm:max-w-lg md:max-w-xl">
                                <div class="bg-white p-5 sm:p-8 relative">
                                    <!-- close button -->
                                    <div class="w-9 h-9 bg-slate-100 rounded-[32px] absolute top-4 right-4 flex justify-center items-center cursor-pointer"
                                        @click="forgetPasswordDilog = false">
                                        <XMarkIcon class="w-6 h-6 text-slate-600" />
                                    </div>
                                    <!-- end close button -->

                                    <div class="text-slate-950 text-lg sm:text-2xl font-medium leading-loose">
                                        {{ $t('Forgot Password') }}
                                    </div>

                                    <div class="text-slate-950 text-lg font-normal leading-7 tracking-tight mt-3">
                                        {{ $t('Enter you valid phone number to reset your password') }}
                                    </div>

                                    <div class="mt-6">
                                        <label for="name" class="form-label mb-2">Country</label>
                                        <v-select :options="countries" label="name" :reduce="country => country.name"
                                            v-model="forgetPassword.country" :placeholder="$t('Select Country')" />
                                        <span v-if="forgetErrors && forgetErrors?.country" class="text-red-500 text-sm">
                                            {{ forgetErrors?.country[0] }}
                                        </span>
                                    </div>

                                    <!-- Phone Number -->
                                    <div class="mt-4">
                                        <label class="text-slate-700 text-base font-normal leading-normal mb-2 block">
                                            {{ $t('Phone Number') }}
                                        </label>

                                        <div class="flex">
                                            <span
                                                class="text-slate-700 text-base font-normal leading-normal bg-slate-100 p-2 border-y border-l rounded-tl-lg rounded-bl-lg flex items-center">
                                                +{{ forgetPassword.phone_code || '00' }}
                                            </span>
                                            <input type="text" v-model="forgetPassword.phone"
                                                :placeholder="$t('Enter phone number')"
                                                class="text-base font-normal w-full p-3 placeholder:text-slate-400 rounded-tr-lg rounded-br-lg border focus:border-primary outline-none"
                                                :class="forgetErrors?.phone ? 'border-red-500' : 'border-slate-200'">
                                        </div>
                                        <span v-if="forgetErrors && forgetErrors?.phone" class="text-red-500 text-sm">{{
                                            forgetErrors?.phone[0] }}</span>
                                    </div>

                                    <!-- login button -->
                                    <button
                                        class="px-6 py-4 bg-primary mt-8 rounded-[10px] text-white text-base font-medium w-full"
                                        @click="sendForgetPasswordOtp">
                                        {{ $t('Send OTP') }}
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Registration Dialog Modal -->
        <TransitionRoot as="template" :show="registerDilog">
            <Dialog as="div" class="relative z-10" @close="registerDilog = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all my-8 md:my-0 w-full sm:max-w-lg md:max-w-xl">
                                <div class="bg-white p-5 sm:p-8 relative">
                                    <!-- close button -->
                                    <div class="w-9 h-9 bg-slate-100 rounded-[32px] absolute top-4 right-4 flex justify-center items-center cursor-pointer"
                                        @click="registerDilog = false">
                                        <XMarkIcon class="w-6 h-6 text-slate-600" />
                                    </div>
                                    <!-- end close button -->

                                    <div class="text-slate-950 text-lg sm:text-2xl font-medium leading-loose">
                                        {{ $t('Welcome') }}!
                                    </div>

                                    <div class="text-slate-950 text-lg font-normal leading-7 tracking-tight mt-3">
                                        {{ $t('Create your account') }}
                                    </div>

                                    <!-- Full Name -->
                                    <div class="mt-8">
                                        <label class="text-slate-700 text-base font-normal leading-normal mb-2 block">
                                            {{ $t('Full Name') }}
                                        </label>

                                        <input type="text" v-model="registerFormData.name"
                                            :placeholder="$t('Enter full name')"
                                            class="text-base font-normal w-full p-3 placeholder:text-slate-400 rounded-lg border focus:border-primary outline-none"
                                            :class="registerErrors?.name ? 'border-red-500' : 'border-slate-200'">
                                        <span v-if="registerErrors && registerErrors?.name"
                                            class="text-red-500 text-sm">
                                            {{ registerErrors?.name[0] }}
                                        </span>
                                    </div>

                                    <div class="mt-4">
                                        <label for="name" class="form-label mb-2">Country</label>
                                        <v-select :options="countries" label="name" :reduce="country => country.name"
                                            v-model="registerFormData.country" :placeholder="$t('Select Country')" />
                                        <span v-if="registerErrors && registerErrors?.country"
                                            class="text-red-500 text-sm">{{
                                                registerErrors?.country[0] }}</span>
                                    </div>

                                    <!-- Phone Number -->
                                    <div class="mt-4">
                                        <label class="text-slate-700 text-base font-normal leading-normal mb-2 block">
                                            {{ $t('Phone Number') }}
                                        </label>

                                        <div class="flex">
                                            <span
                                                class="text-slate-700 text-base font-normal leading-normal bg-slate-100 p-2 border-y border-l rounded-tl-lg rounded-bl-lg flex items-center">
                                                +{{ registerFormData.phone_code || '00' }}
                                            </span>
                                            <input type="text" v-model="registerFormData.phone"
                                                placeholder="Enter phone number"
                                                class="text-base font-normal w-full p-3 placeholder:text-slate-400 rounded-tr-lg rounded-br-lg border focus:border-primary outline-none"
                                                :class="registerErrors?.phone ? 'border-red-500' : 'border-slate-200'">
                                        </div>
                                        <span v-if="registerErrors && registerErrors?.phone"
                                            class="text-red-500 text-sm">
                                            {{ registerErrors?.phone[0] }}
                                        </span>
                                    </div>

                                    <!-- Email -->
                                    <div class="mt-8">
                                        <label class="text-slate-700 text-base font-normal leading-normal mb-2 block">
                                            {{ $t('Email') }}
                                        </label>

                                        <input type="email" v-model="registerFormData.email"
                                            :placeholder="$t('Enter email')"
                                            class="text-base font-normal w-full p-3 placeholder:text-slate-400 rounded-lg border focus:border-primary outline-none"
                                            :class="registerErrors?.email ? 'border-red-500' : 'border-slate-200'">
                                        <span v-if="registerErrors && registerErrors?.email"
                                            class="text-red-500 text-sm">
                                            {{ registerErrors?.email[0] }}
                                        </span>
                                    </div>

                                    <!-- Password -->
                                    <div class="mt-4">
                                        <label class="text-slate-700 text-base font-normal leading-normal mb-2 block">
                                            {{ $t('Create Password') }}
                                        </label>
                                        <div class="relative">
                                            <input :type="showRegisterPassword ? 'text' : 'password'"
                                                v-model="registerFormData.password" :placeholder="$t('Enter Password')"
                                                class="text-base font-normal w-full p-3 placeholder:text-slate-400 rounded-lg border  focus:border-primary outline-none"
                                                :class="registerErrors?.password ? 'border-red-500' : 'border-slate-200'">
                                            <button @click="showRegisterPassword = !showRegisterPassword">
                                                <EyeIcon v-if="showRegisterPassword"
                                                    class="w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2" />
                                                <EyeSlashIcon v-else
                                                    class="w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2" />
                                            </button>
                                        </div>
                                        <span v-if="registerErrors && registerErrors?.password"
                                            class="text-red-500 text-sm">
                                            {{ registerErrors?.password[0] }}
                                        </span>
                                    </div>

                                    <!-- Forgot Password -->
                                    <div class="mt-6 text-slate-900 text-base font-normal">
                                        <span>{{ $t("By clicking the ‘Sign up’ button, you agree with our") }} </span>
                                        <button class="text-primary" @click="showTerms">
                                            {{ $t('Terms & Conditions') }}
                                        </button>
                                        <span> {{ $t('and') }} </span>
                                        <button class="text-primary" @click="showPrivacy">
                                            {{ $t('Privacy Policy') }}
                                        </button>
                                    </div>

                                    <!-- login button -->
                                    <button
                                        class="px-6 py-4 bg-primary mt-6 rounded-[10px] text-white text-base font-medium w-full"
                                        @click="registerFormSubmit">
                                        {{ $t('Sign up') }}
                                    </button>

                                    <div class="px-4 py-2 mt-6 flex items-center justify-center gap-2">
                                        <div class="text-slate-900 text-base font-normal">
                                            {{ $t('Already have an account') }}?
                                        </div>
                                        <button class="text-primary text-base font-normal" @click="showLoginDilog">
                                            {{ $t('Log in') }}
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <!-- end Registration dialog -->

        <!-- OTP Dialog Modal -->
        <TransitionRoot as="template" :show="OTPDilog">
            <Dialog as="div" class="relative z-10" @close="OTPDilog = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all my-8 md:my-0 w-full sm:max-w-lg md:max-w-xl">
                                <div class="bg-white p-5 sm:p-8 relative">
                                    <!-- close button -->
                                    <div class="w-9 h-9 bg-slate-100 rounded-[32px] absolute top-4 right-4 flex justify-center items-center cursor-pointer"
                                        @click="OTPDilog = false">
                                        <XMarkIcon class="w-6 h-6 text-slate-600" />
                                    </div>
                                    <!-- end close button -->

                                    <div class="text-slate-950 text-lg sm:text-2xl font-medium leading-loose">
                                        {{ $t('Enter OTP') }}
                                    </div>

                                    <div class="text-slate-950 mt-3 text-lg font-normal leading-7 tracking-tight">
                                        {{ $t('We sent OTP code to your phone number') }} <br>
                                        {{ registerFormData.phone }}
                                        <button class="text-primary">{{ $t('Edit') }}</button>
                                    </div>

                                    <div class="flex gap-3 mt-6">
                                        <input v-for="(input, index) in inputs" :key="index" :id="'input' + index"
                                            type="text" v-model="input.value" @input="handleInput(index)"
                                            @keydown="handleKeyDown(index, $event)" placeholder="-"
                                            class="text-base font-normal w-10 grow text-center p-3 placeholder:text-slate-400 rounded-lg border border-slate-200 focus:border-primary outline-none"
                                            maxlength="1">
                                    </div>

                                    <!-- Confirm button -->
                                    <button
                                        class="px-6 py-4 bg-primary mt-6 rounded-[10px] text-white text-base font-medium w-full"
                                        @click="verifyOTP">
                                        {{ $t('Confirm OTP') }}
                                    </button>

                                    <div v-if="time > 0" class="px-4 py-2 mt-6 flex items-center justify-center gap-2">
                                        <div class="text-slate-900 text-base font-normal leading-normal">
                                            {{ $t('Resend code in') }}
                                        </div>

                                        <div class="text-primary text-base font-normal leading-normal">00:{{ time }}
                                            {{ $t('sec') }}
                                        </div>
                                    </div>
                                    <!-- Resend OTP -->
                                    <div v-else class="px-4 py-2 mt-6 flex items-center justify-center gap-2">
                                        <button class="text-primary text-base font-normal leading-normal"
                                            @click="sendOTP">
                                            {{ $t('Resend OTP') }}
                                        </button>
                                    </div>

                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <!-- end OTP dialog -->

        <!-- Reset Password Dialog Modal -->
        <TransitionRoot as="template" :show="resetPasswordDilog">
            <Dialog as="div" class="relative z-10" @close="resetPasswordDilog = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all my-8 md:my-0 w-full sm:max-w-lg md:max-w-xl">
                                <div class="bg-white p-5 sm:p-8 relative">
                                    <!-- close button -->
                                    <div class="w-9 h-9 bg-slate-100 rounded-[32px] absolute top-4 right-4 flex justify-center items-center cursor-pointer"
                                        @click="resetPasswordDilog = false">
                                        <XMarkIcon class="w-6 h-6 text-slate-600" />
                                    </div>
                                    <!-- end close button -->

                                    <div class="text-slate-950 text-lg sm:text-2xl font-medium leading-loose">
                                        {{ $t('Reset Password') }}
                                    </div>

                                    <div class="text-slate-950 text-lg font-normal leading-7 tracking-tight mt-3">
                                        {{ $t('Create New Password') }}
                                    </div>

                                    <!-- Password -->
                                    <div class="mt-4">
                                        <label class="text-slate-700 text-base font-normal leading-normal mb-2 block">
                                            {{ $t('Create Password') }}
                                        </label>
                                        <div class="relative">
                                            <input :type="showRegisterPassword ? 'text' : 'password'"
                                                v-model="resetPassword.password" :placeholder="$t('Enter Password')"
                                                class="text-base font-normal w-full p-3 placeholder:text-slate-400 rounded-lg border  focus:border-primary outline-none"
                                                :class="registerErrors?.password ? 'border-red-500' : 'border-slate-200'">
                                            <button @click="showRegisterPassword = !showRegisterPassword">
                                                <EyeIcon v-if="showRegisterPassword"
                                                    class="w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2" />
                                                <EyeSlashIcon v-else
                                                    class="w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2" />
                                            </button>
                                        </div>
                                        <span v-if="forgetErrors && forgetErrors?.password"
                                            class="text-red-500 text-sm">
                                            {{ forgetErrors?.password[0] }}
                                        </span>
                                    </div>

                                    <div class="mt-4">
                                        <label class="text-slate-700 text-base font-normal leading-normal mb-2 block">
                                            {{ $t('Confirm Password') }}
                                        </label>
                                        <div class="relative">
                                            <input :type="showRegisterPassword ? 'text' : 'password'"
                                                v-model="resetPassword.password_confirmation"
                                                :placeholder="$t('Enter Password')"
                                                class="text-base font-normal w-full p-3 placeholder:text-slate-400 rounded-lg border  focus:border-primary outline-none"
                                                :class="forgetErrors?.password ? 'border-red-500' : 'border-slate-200'">
                                            <button @click="showRegisterPassword = !showRegisterPassword">
                                                <EyeIcon v-if="showRegisterPassword"
                                                    class="w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2" />
                                                <EyeSlashIcon v-else
                                                    class="w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2" />
                                            </button>
                                        </div>
                                        <span v-if="conformPassError" class="text-red-500 text-sm">
                                            {{ conformPassError }}
                                        </span>
                                    </div>

                                    <!-- login button -->
                                    <button
                                        class="px-6 py-4 bg-primary mt-6 rounded-[10px] text-white text-base font-medium w-full"
                                        @click="resetPasswordSubmit">
                                        {{ $t('Reset Password') }}
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <!-- end Registration dialog -->
    </div>
</template>

<style>

/* Shared */
.loginBtn {
  box-sizing: border-box;
  position: relative;
  width: 17em;
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
}
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}


/* Facebook */
.loginBtn--facebook {
  background-color: #4C69BA;
  background-image: linear-gradient(#4C69BA, #3B55A0);
  /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
  text-shadow: 0 -1px 0 #354C8C;
}
.loginBtn--facebook:before {
  border-right: #364e92 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
  background-color: #5B7BD5;
  background-image: linear-gradient(#5B7BD5, #4864B1);
}


/* Google */
.loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #DD4B39;
  margin-top: 12px;
}
.loginBtn--google:before {
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
}
.loginBtn--google:hover,
.loginBtn--google:focus {
  background: #E74B37;
}

/* Apple */
.loginBtn--apple {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #000;
}
.loginBtn--apple:before {
  border-right: #fff 1px solid;
  background: url('https://srdproject.com/assets/images/apple-22.png') 6px 6px no-repeat;
}
.loginBtn--apple:hover,
.loginBtn--apple:focus {
  background: #000;
}
</style>

<script setup>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/solid'
import { nextTick, onMounted, ref, watch } from 'vue'
import ToastSuccessMessage from './ToastSuccessMessage.vue'

import { useToast } from 'vue-toastification'
import { useAuth } from '../stores/AuthStore'
import { useBaskerStore } from '../stores/BasketStore'
import { useMaster } from '../stores/MasterStore'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, OAuthProvider } from 'firebase/auth';

import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter();

const toast = useToast();
const baskerStore = useBaskerStore();
const master = useMaster();

const AuthStore = useAuth();

const showLoginPassword = ref(false);
const hasForgetPassword = ref(false);
const forgetPasswordDilog = ref(false);
const resetPasswordDilog = ref(false);

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6yTtXJQFoNMMzzlDi9tsu0QkACHWk1vQ",
    authDomain: "ready-ecommerce-71775.firebaseapp.com",
    projectId: "ready-ecommerce-71775",
    storageBucket: "ready-ecommerce-71775.appspot.com",
    messagingSenderId: "228278596022",
    appId: "1:228278596022:web:03473241fcc52b23449117",
    measurementId: "G-26T7BTC2ZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

const loginFormData = ref({
    phone: '',
    password: ''
});

onMounted(() => {
    if (master.app_environment == 'local') {
        loginFormData.value.phone = 'user@readyecommerce.com';
        loginFormData.value.password = 'secret';
    }

    fetchCountries();
})

const errors = ref({});

const content = {
    component: ToastSuccessMessage,
    props: {
        title: 'Login Successful',
        message: 'You have successfully logged in.',
    },
};

const countries = ref([]);

const fetchCountries = () => {
    axios.get('/countries').then((response) => {
        countries.value = response.data.data.countries
    })
}

const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then(async (result) => {
            const user = result.user;
            const idToken = await user.getIdToken();  // Get Firebase auth token

            // Send the token to your Laravel backend
            axios.post('/google-login', { token: idToken }).then((response) => {
                AuthStore.setToken(response.data.data.access.token);
                AuthStore.setUser(response.data.data.user);
                AuthStore.hideLoginModal();
                toast(content, {
                    type: "default",
                    hideProgressBar: true,
                    icon: false,
                    position: "top-right",
                    toastClassName: "vue-toastification-alert",
                    timeout: 3000
                });
            }).catch((error) => {
                toast.error(error.response.data.message, {
                    position: "bottom-left",
                });
                errors.value = error.response.data.errors
            })
        })
        .catch((error) => {
            console.error('Google Sign-In Error:', error);
        });

}

const loginWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
        .then(async (result) => {
            const user = result.user;
            const idToken = await user.getIdToken();  // Get Firebase auth token

            // Send the token to your Laravel backend
            // axios.post('/facebook-login', { token: idToken }).then((response) => {
            //     AuthStore.setToken(response.data.data.access.token);
            //     AuthStore.setUser(response.data.data.user);
            //     AuthStore.hideLoginModal();
            //     toast(content, {
            //         type: "default",
            //         hideProgressBar: true,
            //         icon: false,
            //         position: "top-right",
            //         toastClassName: "vue-toastification-alert",
            //         timeout: 3000
            //     });
            // }).catch((error) => {
            //     toast.error(error.response.data.message, {
            //         position: "bottom-left",
            //     });
            //     errors.value = error.response.data.errors
            // })
        })
        .catch((error) => {
            console.error('Facebook Sign-In Error:', error);
        });

}
const loginWithApple = () => {
    signInWithPopup(auth, appleProvider)
        .then(async (result) => {
            const user = result.user;
            const idToken = await user.getIdToken();  // Get Firebase auth token

            // Send the token to your Laravel backend
            axios.post('/apple-login', { token: idToken }).then((response) => {
                AuthStore.setToken(response.data.data.access.token);
                AuthStore.setUser(response.data.data.user);
                AuthStore.hideLoginModal();
                toast(content, {
                    type: "default",
                    hideProgressBar: true,
                    icon: false,
                    position: "top-right",
                    toastClassName: "vue-toastification-alert",
                    timeout: 3000
                });
            }).catch((error) => {
                toast.error(error.response.data.message, {
                    position: "bottom-left",
                });
                errors.value = error.response.data.errors
            })
        })
        .catch((error) => {
            console.error('Apple Sign-In Error:', error);
        });

}

const loginFormSubmit = () => {
    axios.post('/login', loginFormData.value).then((response) => {
        AuthStore.setToken(response.data.data.access.token);
        AuthStore.setUser(response.data.data.user);
        AuthStore.hideLoginModal();
        baskerStore.fetchCart();
        toast(content, {
            type: "default",
            hideProgressBar: true,
            icon: false,
            position: "top-right",
            toastClassName: "vue-toastification-alert",
            timeout: 3000
        });
    }).catch((error) => {
        toast.error(error.response.data.message, {
            position: "bottom-left",
        });
        errors.value = error.response.data.errors
    })
}

const registerDilog = ref(false);
const OTPDilog = ref(false);

const showRegisterPassword = ref(false);

const time = ref(60);

const onTimer = () => {
    if (time.value > 0) {
        setTimeout(() => {
            time.value -= 1;
            onTimer();
        }, 1000);
    }
}

const inputs = ref([
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' }
]);

const handleInput = (index) => {
    let nextIndex = index + 1;
    if (nextIndex < inputs.value.length && inputs.value[index].value != '') {
        nextTick(() => {
            const inputElement = document.getElementById('input' + nextIndex);
            if (inputElement) {
                inputElement.focus();
            }
        });
    }
};

const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && inputs.value[index].value === '') {
        let previousIndex = index - 1;
        if (previousIndex >= 0) {
            nextTick(() => {
                const inputElement = document.getElementById('input' + previousIndex);
                if (inputElement) {
                    inputElement.focus();
                }
            })
        }
    }
};

const showRegisterDilog = () => {
    AuthStore.hideLoginModal();
    registerDilog.value = true
}

const showLoginDilog = () => {
    registerDilog.value = false
    AuthStore.showLoginModal();
}

const registerFormData = ref({
    name: '',
    phone: '',
    password: '',
    country: null,
    phone_code: null,
});

watch(() => registerFormData.value.country, () => {
    var findCountry = countries.value.find((country) => country.name == registerFormData.value.country);
    registerFormData.value.phone_code = findCountry.phone_code
})

const registerMessage = {
    component: ToastSuccessMessage,
    props: {
        title: 'Register Successful',
        message: 'You have successfully registered.',
    },
};

const registerErrors = ref({});

const registerFormSubmit = () => {
    if (!registerFormData.value.country) {
        registerErrors.value = {
            country: ['The country field is required']
        }
        return
    } else {
        registerErrors.value = {}
    }

    axios.post('/registration', registerFormData.value).then((response) => {
        AuthStore.setToken(response.data.data.access.token);
        AuthStore.setUser(response.data.data.user);

        toast(registerMessage, {
            type: "default",
            hideProgressBar: true,
            icon: false,
            position: "top-right",
            toastClassName: "vue-toastification-alert",
            timeout: 3000
        });

        registerFormData.value.name = '';
        registerFormData.value.password = '';
        registerFormData.value.country = null;
        registerFormData.value.phone_code = null;

        registerDilog.value = false
        registerErrors.value = {}
        sendOTP(registerFormData.value.phone, registerFormData.value.phone_code)
    }).catch((error) => {
        registerErrors.value = error.response.data.errors
    })
}

const sendOTPNumber = ref('');
const phoneCode = ref(null);

const sendOTP = (phoneNumber = '', phone_code = null) => {
    if (phoneNumber) {
        sendOTPNumber.value = phoneNumber
        phoneCode.value = phone_code
    }
    axios.post('/send-otp', { phone: sendOTPNumber.value, phone_code: phoneCode.value }).then((response) => {
        OTPDilog.value = true
        time.value = 60
        onTimer();
        toast.success(response.data.message, {
            position: "bottom-left",
        });
        forgetPasswordDilog.value = false
    }).catch((error) => {
        toast.error(error.response.data.message, {
            position: "bottom-left",
        });
    })
}

const resetPassword = ref({
    password: '',
    password_confirmation: '',
    token: ''
});

const verifyOTP = () => {
    const otp = inputs.value.map(input => input.value).join('');
    axios.post('/verify-otp', { phone: sendOTPNumber.value, otp: otp }).then((response) => {
        toast.success(response.data.message, {
            position: "bottom-left",
        });
        OTPDilog.value = false,
            resetPassword.value.token = response.data.data.token
        if (hasForgetPassword) {
            resetPasswordDilog.value = true
        }
    }).catch((error) => {
        toast.error(error.response.data.message, {
            position: "bottom-left",
        });
    })
}

const showTerms = () => {
    registerDilog.value = false
    router.push({ name: 'terms-and-conditions' })
}

const showPrivacy = () => {
    registerDilog.value = false
    router.push({ name: 'privacy-policy' })
}

const forgetPassword = ref({
    phone: '',
    country: null,
    phone_code: null,
});

const forgetErrors = ref({});

watch(() => forgetPassword.value.country, () => {
    var findCountry = countries.value.find((country) => country.name == forgetPassword.value.country);
    forgetPassword.value.phone_code = findCountry.phone_code
})

const showForgetPasswordDilog = () => {
    AuthStore.hideLoginModal();
    forgetPassword.value.phone = loginFormData.value.phone;
    hasForgetPassword.value = true;
    forgetPasswordDilog.value = true;
}

const sendForgetPasswordOtp = () => {
    hasForgetPassword.value = true;

    if (!forgetPassword.value.country) {
        forgetErrors.value = {
            country: ['The country field is required']
        }
        return
    } else {
        forgetErrors.value = {}
    }

    if (!forgetPassword.value.phone) {
        forgetErrors.value = {
            phone: ['The phone field is required']
        }
        return
    } else {
        forgetErrors.value = {}
    }

    sendOTP(forgetPassword.value.phone, forgetPassword.value.phone_code)
}

const conformPassError = ref(null);
const resetPasswordSubmit = () => {
    if (resetPassword.value.password !== resetPassword.value.password_confirmation) {
        conformPassError.value = 'Confirm Password does not match.'
        return
    }
    axios.post('/reset-password', resetPassword.value).then((response) => {
        toast.success(response.data.message, {
            position: "bottom-left",
        });
        resetPasswordDilog.value = false;
        AuthStore.showLoginModal();
    }).catch((error) => {
        toast.error(error.response.data.message, {
            position: "bottom-left",
        });
        forgetErrors.value = error.response.data.errors
    })
}

</script>
