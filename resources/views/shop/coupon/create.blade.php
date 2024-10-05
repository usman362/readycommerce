@extends('layouts.app')

@section('content')

    <div class="page-title">
        <div class="d-flex gap-2 align-items-center text-muted">
            <i class="bi bi-plus-circle"></i> {{ __('Add New Voucher') }}
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-lg-9 col-md-10 m-auto">
            <form action="{{ route('shop.voucher.store') }}" method="POST">
                @csrf
                <div class="card">
                    <div class="card-header d-flex align-items-center justify-content-between gap-2 py-3">
                        <h4 class="card-title m-0">
                            <i class="bi bi-patch-plus"></i> {{ __('Add New Voucher') }}
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6 mb-3">
                                <x-input name="code" type="text" placeholder="Voucher Code" label="Voucher Code" required="true"/>
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <x-select name="discount_type" label="Discount Type" required="true">
                                    @foreach ($discountTypes as $type)
                                        <option value="{{ $type->value }}">
                                            {{ __($type->value) }}
                                        </option>
                                    @endforeach
                                </x-select>
                            </div>

                            <div class="col-12 col-md-6">
                                <x-input name="discount" label="Discount" type="text" placeholder="Discount" required="true"
                                    onlyNumber="true" />
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <x-input name="min_order_amount" type="text" placeholder="Minimum Order Amount" label="Minimum Order Amount" onlyNumber="true" required="true"/>
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <x-input name="limit_for_user" label="Limit For Single User" type="text" placeholder="exm: 5" onlyNumber="true" />
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <x-input name="max_discount_amount" label="Maximum Discount Amount" type="text" placeholder="exm: $300" onlyNumber="true" />
                            </div>

                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-md-6 mb-3">
                                        <x-input type="text" id="datepicker" label="Start Date" name="start_date" required="true" placeholder="mm/dd/yyyy"/>
                                    </div>
                                    <div class="col-12 col-md-6 mb-3">
                                        <x-input type="time" id="timepicker" label="Start Time" name="start_time" required="true"/>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <x-input type="text" id="datepicker2" label="Expired Date" name="expired_date" required="true" placeholder="mm/dd/yyyy"/>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <x-input type="time" id="timepicker2" label="Expired Time" name="expired_time" required="true"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-footer py-3 d-flex justify-content-between flex-wrap gap-2">
                        <a href="{{ route('shop.voucher.index') }}" class="btn btn-light px-4 py-2">
                            {{ __('Cancel') }}
                        </a>
                        <button type="submit" class="btn btn-primary px-5 py-2">
                            {{ __('Submit') }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
@push('scripts')
    <script>
        $(document).ready(function() {
            $("#datepicker").datepicker({
                showOtherMonths: true,
                selectOtherMonths: true
            });

            $("#datepicker2").datepicker({
                showOtherMonths: true,
                selectOtherMonths: true
            });


            $('#timepicker').timepicker({
                'timeFormat': 'H:i:s'
            });

            $('#timepicker2').timepicker({
                'timeFormat': 'H:i:s'
            });
        });
    </script>
@endpush
