@extends('layouts.app')

@section('content')
    <div>
        <h4>{{ __('Profile Details') }}</h4>
    </div>

    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
                <div class="card mb-3" style="border-radius: .5rem;">
                    <div class="row g-0">
                        <div class="col-md-4 gradient-custom text-center text-white"
                            style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                            <img src="{{ auth()->user()->thumbnail }}" alt="Avatar" class="img-fluid mt-5 mb-3"
                                style="width: 80px;" />
                            <h5>{{ auth()->user()->name }}</h5>
                            <a href="{{ route('admin.profile.edit') }}" class="btn btn-sm btn-primary">
                                <i class="fas fa-edit"></i>
                            </a>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body p-4">
                                <h6>{{ __('Information') }}</h6>
                                <hr class="mt-0 mb-4">
                                <div class="row pt-1">
                                    <div class="col-6 mb-3">
                                        <h6>{{ __('Email') }}</h6>
                                        <p class="text-muted">{{ __(':email', ['email' => auth()->user()->email]) }}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6>{{ __('Phone') }}</h6>
                                        <p class="text-muted">{{ __(':phone', ['phone' => auth()->user()->phone]) }}</p>
                                    </div>

                                    <div class="col-6 mb-3">
                                        <h6>{{ __('Gender') }}</h6>
                                        <p class="text-muted">{{ __(':gender', ['gender' => auth()->user()->gender]) }}</p>
                                    </div>

                                    <div class="col-6 mb-3">
                                        <h6>{{ __('Date of Birth') }}</h6>
                                        <p class="text-muted">{{ __(':date_of_birth', ['date_of_birth' => auth()->user()->date_of_birth]) }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
