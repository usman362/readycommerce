@extends('layouts.app')

@section('content')
    <div class="page-title">
        <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-shop"></i> {{ __('Add New Shop') }}
        </div>
    </div>
    <form action="{{ route('admin.shop.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <!--######## User Information ##########-->
        <div class="card mt-3">
            <div class="card-body">

                <div class="d-flex gap-2 border-bottom pb-2">
                    <i class="fa-solid fa-user"></i>
                    <h5>
                        {{ __('User Information') }}
                    </h5>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mt-3">
                                    <x-input label="First Name" name="first_name" type="text" placeholder="Enter Name"
                                        required="true" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mt-3">
                                    <x-input label="Last Name" name="last_name" type="text" placeholder="Enter Name" />
                                </div>
                            </div>
                        </div>

                        <div class="mt-3">
                            <x-input label="Phone Number" name="phone" type="number" placeholder="Enter phone number"
                                required="true" />
                        </div>

                        <div class="mt-3">
                            <x-select label="Gender" name="gender">
                                <option value="male">{{ __('Male') }}</option>
                                <option value="female">{{ __('Female') }}</option>
                            </x-select>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="mt-3 d-flex align-items-center justify-content-center">
                            <div class="ratio1x1">
                                <img id="previewProfile" src="https://placehold.co/500x500/png" alt=""
                                    width="100%">
                            </div>
                        </div>
                        <div class="mt-3">
                            <x-file name="profile_photo" label="User profile (Ratio 1:1)" preview="previewProfile"
                                required="true" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!--######## Account Information ##########-->
        <div class="card mt-4">
            <div class="card-body">

                <div class="d-flex gap-2 border-bottom pb-2">
                    <i class="fa-solid fa-user"></i>
                    <h5>
                        {{ __('Account Information') }}
                    </h5>
                </div>
                <div class="row mt-3">
                    <div class="col-md-4">
                        <x-input type="email" name="email" label="Email" placeholder="Enter Email Address"
                            required="true" />
                    </div>

                    <div class="col-md-4 mt-3 mt-md-0">
                        <x-input type="text" name="password" label="Password" placeholder="Enter Password"
                            required="true" />
                    </div>

                    <div class="col-md-4 mt-3 mt-md-0">
                        <x-input type="text" name="password_confirmation" label="Confirm Password"
                            placeholder="Enter Confirm Password" required="true" />
                    </div>
                </div>
            </div>
        </div>

        <!--######## Shop Information ##########-->
        <div class="card mt-4 mb-4">
            <div class="card-body">

                <div class="d-flex gap-2 border-bottom pb-2">
                    <i class="fa-solid fa-user"></i>
                    <h5>
                        {{ __('Shop Information') }}
                    </h5>
                </div>
                <div class="row mt-3">
                    <div class="col-md-4">
                        <x-input type="text" name="shop_name" label="Shop Name" placeholder="Enter Shop Name"
                            required="true" />
                    </div>

                    <div class="col-md-4 mt-3 mt-md-0">
                        <x-input type="text" name="address" label="Address" placeholder="Enter Address" />
                    </div>

                    <div class="col-md-6 mt-4">
                        <div class="d-flex align-items-center justify-content-center mb-2">
                            <div class="ratio1x1">
                                <img src="https://placehold.co/500x500/png" id="previewShopLogo" alt=""
                                    width="100%">
                            </div>
                        </div>
                        <x-file name="shop_logo" label="Shop logo(Ratio 1:1)" preview="previewShopLogo" required="true" />
                    </div>

                    <div class="col-md-6 mt-4">
                        <div class="d-flex align-items-center justify-content-center mb-2">
                            <div class="ratio4x1">
                                <img src="https://placehold.co/2000x500/png" id="shopBanner" alt=""
                                    width="100%">
                            </div>
                        </div>
                        <x-file name="shop_banner" label="Shop banner Ratio 4:1 (2000 x 500 px)" preview="shopBanner"
                            required="true" />
                    </div>
                </div>

                <div class="mt-3">
                    <label for="">
                        {{ __('Description') }}
                    </label>
                    <textarea name="description" class="form-control" id="description" rows="2" placeholder="Enter Description" onkeyup="checkDescription()">{{ old('description') }}</textarea>
                    @error('description')
                        <p class="text text-danger m-0">{{ $message }}</p>
                    @enderror
                    <p class="text text-danger m-0" id="descriptionError"></p>
                </div>

                <div class="d-flex justify-content-end mt-4">
                    <button class="btn btn-primary py-2 px-5">
                        {{ __('Submit') }}
                    </button>
                </div>

            </div>
        </div>
    </form>
@endsection
@push('scripts')
    <script>
        function checkDescription() {
            if (document.getElementById('description').value.length > 200) {
                document.getElementById('descriptionError').innerHTML =
                    'Description must be less than or equal to 220 characters';
            } else {
                document.getElementById('descriptionError').innerHTML = '';
            }
        }
    </script>
@endpush
