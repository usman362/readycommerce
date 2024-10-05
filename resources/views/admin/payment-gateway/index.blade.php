@extends('layouts.app')

@section('content')
    <div class="container-fluid mb-3">

        <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h4 class="m-0">{{ __('Payment Gateways') }}</h4>
        </div>

        <div class="row">
            @foreach ($paymentGateways as $paymentGateway)
                @php
                    $configs = json_decode($paymentGateway->config);
                @endphp

                <div class="col-lg-6 mb-4">
                    <div class="card">
                        <div class="card-header d-flex align-items-center justify-content-between gap-2 py-3">
                            <p class="paymentTitle m-0">
                                {{ strtoupper($paymentGateway->name) }}
                            </p>

                            <div class="d-flex align-items-center gap-2">
                                <span class="{{ $paymentGateway->is_active ? 'statusOn' : 'statusOff' }}">
                                    {{ $paymentGateway->is_active ? 'On' : 'Off' }}
                                </span>
                                <label class="switch mb-0" data-bs-toggle="tooltip" data-bs-placement="left"
                                    data-bs-title="{{ $paymentGateway->is_active ? 'Turn off' : 'Turn on' }}">
                                    <a href="{{ route('admin.paymentGateway.toggle', $paymentGateway->id) }}"
                                        class="confirm">
                                        <input type="checkbox" {{ $paymentGateway->is_active ? 'checked' : '' }}>
                                        <span class="slider round"></span>
                                    </a>
                                </label>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="py-2">
                                <img id="preview{{ $paymentGateway->name }}" class="paymentLogo" src="{{ $paymentGateway->logo }}" alt="logo" loading="lazy"/>
                            </div>

                            <form action="{{ route('admin.paymentGateway.update', $paymentGateway->id) }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="mt-3">
                                    <x-select name="mode" label="Mode">
                                        <option value="test" {{ $paymentGateway->mode == 'test' ? 'selected' : '' }}>
                                            Test
                                        </option>
                                        <option value="live" {{ $paymentGateway->mode == 'live' ? 'selected' : '' }} {{ app()->environment('local') ? 'disabled' : '' }}>
                                            Live
                                        </option>
                                    </x-select>
                                </div>

                                @foreach ($configs as $key => $value)
                                    @php
                                        $label = ucwords(str_replace('_', ' ', $key));
                                    @endphp
                                    <div class="mt-3">
                                        <x-input :value="$value" name="config[{{ $key }}]" type="text"
                                            placeholder="{{ $label }}" label="{{ $label }}"
                                            required="true" readonly="{{ app()->environment('local') ? 'true' : '' }}"/>
                                    </div>
                                @endforeach

                                <div class="mt-3">
                                    <x-input name="title" type="text" label="Payment Gateway Title" :value="$paymentGateway->title"
                                        required="true" readonly="{{ app()->environment('local') ? 'true' : '' }}"/>
                                </div>

                                <div class="mt-3">
                                    <x-file name="logo" label="Choose Logo" preview="preview{{ $paymentGateway->name }}" />
                                </div>

                                <div class="mt-3 d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary py-2">
                                        {{__('Save And Update')}}
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            @endforeach


        </div>
    </div>
@endsection
@push('scripts')
    <script>
        $(".confirm").on("click", function(e) {
            e.preventDefault();
            const url = $(this).attr("href");
            Swal.fire({
                title: "Are you sure?",
                text: "You want to change status!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Change it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = url;
                }
            });
        });
    </script>
@endpush
