<!--- Dashboard --->
<li>
    <a class="menu {{ $request->routeIs('admin.dashboard') ? 'active' : '' }}" href="{{ route('admin.dashboard') }}">
        <span>
            <i class="fa-solid fa-house menu-icon"></i>
            {{ __('Dashboard') }}
        </span>
    </a>
</li>

<li class="menu-divider">
    <span class="menu-title">{{ __('PROMOTION MANAGEMENT') }}</span>
</li>
<!--- banner--->
<li>
    <a class="menu {{ $request->routeIs('admin.banner.*') ? 'active' : '' }}" href="{{ route('admin.banner.index') }}">
        <span>
            <i class="fa-solid fa-image menu-icon"></i>
            {{ __('Banner') }}
        </span>
    </a>
</li>

<!--- ads--->
<li>
    <a class="menu {{ $request->routeIs('admin.ad.*') ? 'active' : '' }}" href="{{ route('admin.ad.index') }}">
        <span>
            <i class="fa-solid fa-photo-film menu-icon"></i>
            {{ __('Ads') }}
        </span>
    </a>
</li>

<!--- Coupon discount--->
<li>
    <a class="menu {{ $request->routeIs('shop.voucher.*') ? 'active' : '' }}"
        href="{{ route('shop.voucher.index') }}">
        <span>
            <i class="fa-solid fa-ticket menu-icon"></i>
            {{ __('Coupon Voucher') }}
        </span>
    </a>
</li>

@php
    use App\Enums\OrderStatus;
    $orderStatuses = OrderStatus::cases();
@endphp

@hasanyrole('admin|root')
    <!--- notification--->
    <li>
        <a class="menu {{ $request->routeIs('admin.customerNotification.*') ? 'active' : '' }}"
            href="{{ route('admin.customerNotification.index') }}">
            <span>
                <i class="fa-solid fa-bell menu-icon"></i>
                {{ __('Notifications') }}
            </span>
        </a>
    </li>

    <li class="menu-divider">
        <span class="menu-title">{{ __('ORDER MANAGEMENT') }}</span>
    </li>

    <!--- Orders --->
    <li>
        <a class="menu {{ request()->routeIs('admin.order.*') ? 'active' : '' }}" data-bs-toggle="collapse"
            href="#ordersMenu">
            <span>
                <i class="fa-solid fa-cart-shopping menu-icon"></i>
                {{ __('All Orders') }}
            </span>
            <img src="{{ asset('assets/icons/arrowDown.svg') }}" alt="" class="downIcon">
        </a>
        <div class="collapse dropdownMenuCollapse {{ $request->routeIs('admin.order.*') ? 'show' : '' }}" id="ordersMenu">
            <div class="listBar">
                <a href="{{ route('admin.order.index') }}"
                    class="subMenu hasCount {{ request()->url() === route('admin.order.index') ? 'active' : '' }}">
                    {{ __('All') }} <span class="count statusAll">{{ $allOrders > 99 ? '99+' : $allOrders }}</span>
                </a>
                @foreach ($orderStatuses as $status)
                    <a href="{{ route('admin.order.index', str_replace(' ', '_', $status->value)) }}"
                        class="subMenu hasCount {{ request()->url() === route('admin.order.index', str_replace(' ', '_', $status->value)) ? 'active' : '' }}">
                        <span>{{ __($status->value) }}</span>
                        <span
                            class="count status{{ Str::camel($status->value) }}">{{ ${Str::camel($status->value)} > 99 ? '99+' : ${Str::camel($status->value)} }}</span>
                    </a>
                @endforeach
            </div>
        </div>
    </li>

    <!--- reviews --->
    <li>
        <a class="menu {{ $request->routeIs('admin.review.*') ? 'active' : '' }}"
            href="{{ route('admin.review.index') }}">
            <span>
                <i class="fa-regular fa-star-half-stroke menu-icon"></i>
                {{ __('Reviews') }}
            </span>
        </a>
    </li>

@endhasanyrole


<li class="menu-divider">
    <span class="menu-title">{{ __('POS Management') }}</span>
</li>

<!--- POS--->
<li>
    <a class="menu {{ $request->routeIs('shop.pos.index') ? 'active' : '' }}" href="{{ route('shop.pos.index') }}">
        <span>
            <i class="fa-solid fa-store menu-icon"></i>
            {{ __('POS') }}
        </span>
    </a>
</li>

<!--- Draft --->
<li>
    <a class="menu {{ $request->routeIs('shop.pos.draft') ? 'active' : '' }}" href="{{ route('shop.pos.draft') }}">
        <span>
            <i class="fa-brands fa-firstdraft menu-icon"></i>
            {{ __('Draft') }}
        </span>
    </a>
</li>

<!--- POS Sales--->
<li>
    <a class="menu {{ $request->routeIs('shop.pos.sales') ? 'active' : '' }}" href="{{ route('shop.pos.sales') }}">
        <span>
            <i class="fa-solid fa-cart-shopping menu-icon"></i>
            {{ __('POS Sales') }}
        </span>
    </a>
</li>

<li class="menu-divider">
    <span class="menu-title">{{ __('Product Variants') }}</span>
</li>

<!--- brand --->
<li>
    <a class="menu {{ $request->routeIs('shop.brand.*') ? 'active' : '' }}" href="{{ route('shop.brand.index') }}">
        <span>
            <i class="fa-solid fa-star menu-icon"></i>
            {{ __('Brand') }}
        </span>
    </a>
</li>

<!--- color--->
<li>
    <a class="menu {{ $request->routeIs('shop.color.*') ? 'active' : '' }}" href="{{ route('shop.color.index') }}">
        <span>
            <i class="fa-solid fa-palette menu-icon"></i>
            {{ __('Color') }}
        </span>
    </a>
</li>

<!--- size--->
<li>
    <a class="menu {{ $request->routeIs('shop.size.*') ? 'active' : '' }}" href="{{ route('shop.size.index') }}">
        <span>
            <i class="fa-solid fa-list-ol menu-icon"></i>
            {{ __('Sizes') }}
        </span>
    </a>
</li>

<!--- unit--->
<li>
    <a class="menu {{ $request->routeIs('shop.unit.*') ? 'active' : '' }}" href="{{ route('shop.unit.index') }}">
        <span>
            <i class="fa-brands fa-unity menu-icon"></i>
            {{ __('Unit') }}
        </span>
    </a>
</li>

<li class="menu-divider">
    <span class="menu-title">{{ __('Product Management') }}</span>
</li>
<!--- categories--->

<li>
    <a class="menu {{ request()->routeIs('shop.category.*', 'shop.subcategory.*') ? 'active' : '' }}"
        data-bs-toggle="collapse" href="#categoryMenu">
        <span>
            <i class="fa-solid fa-border-all menu-icon"></i>
            {{ __('Categories') }}
        </span>
        <img src="{{ asset('assets/icons/arrowDown.svg') }}" alt="" class="downIcon">
    </a>
    <div class="collapse dropdownMenuCollapse {{ $request->routeIs('shop.category.*', 'shop.subcategory.*') ? 'show' : '' }}"
        id="categoryMenu">
        <div class="listBar">

            <a href="{{ route('shop.category.index') }}"
                class="subMenu hasCount {{ request()->routeIs('shop.category.*') ? 'active' : '' }}">
                {{ __('Category') }}
            </a>

            <!--- sub categories--->
            <a href="{{ route('shop.subcategory.index') }}"
                class="subMenu hasCount {{ request()->routeIs('shop.subcategory.*') ? 'active' : '' }}">
                {{ __('Sub Category') }}
            </a>

        </div>
    </div>
</li>

<!--- Products--->
<li>
    <a class="menu {{ $request->routeIs('shop.product.*') ? 'active' : '' }}"
        href="{{ route('shop.product.index') }}">
        <span>
            <i class="fa-brands fa-codepen menu-icon"></i>
            {{ __('Products') }}
        </span>
    </a>
</li>

<!--- gift--->
<li>
    <a class="menu {{ $request->routeIs('shop.gift.*') ? 'active' : '' }}" href="{{ route('shop.gift.index') }}">
        <span>
            <i class="fa-solid fa-gift menu-icon"></i>
            {{ __('Gift') }}
        </span>
    </a>
</li>

@use(App\Models\LegalPage)
@hasanyrole('admin|root')

    <li class="menu-divider">
        <span class="menu-title">{{ __('USER MANAGEMENT') }}</span>
    </li>
    <!--- rider --->
    <li>
        <a class="menu {{ $request->routeIs('admin.rider.*') ? 'active' : '' }}" href="{{ route('admin.rider.index') }}">
            <span>
                <i class="bi bi-bicycle menu-icon"></i>
                {{ __('Riders') }}
            </span>
        </a>
    </li>

    <li class="menu-divider">
        <span class="menu-title">{{ __('Business management') }}</span>
    </li>

    <!--- Settings --->
    <li>
        <a class="menu {{ request()->routeIs('admin.generale-setting.*', 'admin.business-setting.*', 'admin.socialLink.*', 'admin.themeColor.*', 'admin.deliveryCharge.*', 'admin.ticketissuetype.*') ? 'active' : '' }}"
            data-bs-toggle="collapse" href="#setings">
            <span>
                <i class="bi bi-gear-fill menu-icon"></i>
                {{ __('Buisness Settings') }}
            </span>
            <img src="{{ asset('assets/icons/arrowDown.svg') }}" alt="" class="downIcon">
        </a>
        <div class="collapse dropdownMenuCollapse {{ $request->routeIs('admin.generale-setting.*', 'admin.business-setting.*', 'admin.socialLink.*', 'admin.themeColor.*', 'admin.deliveryCharge.*', 'admin.ticketissuetype.*') ? 'show' : '' }}"
            id="setings">
            <div class="listBar">
                <a href="{{ route('admin.generale-setting.index') }}"
                    class="subMenu {{ request()->routeIs('admin.generale-setting.index') ? 'active' : '' }}">
                    {{ __('General Settings') }}
                </a>

                <a href="{{ route('admin.business-setting.index') }}"
                    class="subMenu {{ request()->routeIs('admin.business-setting.*') ? 'active' : '' }}">
                    {{ __('Business Setup') }}
                </a>

                <a href="{{ route('admin.deliveryCharge.index') }}"
                    class="subMenu {{ request()->routeIs('admin.deliveryCharge.*') ? 'active' : '' }}">
                    {{ __('Delivery Charge') }}
                </a>

                <a href="{{ route('admin.themeColor.index') }}"
                    class="subMenu {{ request()->routeIs('admin.themeColor.*') ? 'active' : '' }}">
                    {{ __('Theme Colors') }}
                </a>

                <a href="{{ route('admin.socialLink.index') }}"
                    class="subMenu {{ request()->routeIs('admin.socialLink.index') ? 'active' : '' }}">
                    {{ __('Social Links') }}
                </a>

                <a href="{{ route('admin.ticketissuetype.index') }}"
                    class="subMenu {{ request()->routeIs('admin.ticketissuetype.index') ? 'active' : '' }}">
                    {{ __('Ticket Issue Types') }}
                </a>
            </div>
        </div>
    </li>

    <!--- legal pages --->
    <li>
        <a class="menu {{ request()->routeIs('admin.legalpage.*', 'admin.contactUs.*') ? 'active' : '' }}"
            data-bs-toggle="collapse" href="#legalPages">
            <span>
                <i class="fa-solid fa-bookmark menu-icon"></i>
                {{ __('Legal Pages') }}
            </span>
            <img src="{{ asset('assets/icons/arrowDown.svg') }}" alt="" class="downIcon">
        </a>
        <div class="collapse dropdownMenuCollapse {{ $request->routeIs('admin.legalpage.*', 'admin.contactUs.*') ? 'show' : '' }}"
            id="legalPages">
            <div class="listBar">
                @foreach (LegalPage::all() as $legalPage)
                    <a href="{{ route('admin.legalpage.index', $legalPage->slug) }}"
                        class="subMenu {{ request()->fullUrl() === route('admin.legalpage.edit', $legalPage->slug) || request()->fullUrl() === route('admin.legalpage.index', $legalPage->slug) ? 'active' : '' }}"
                        title="{{ $legalPage->title }}">
                        {{ __($legalPage->title) }}
                    </a>
                @endforeach

                <a href="{{ route('admin.contactUs.index') }}"
                    class="subMenu {{ request()->routeIs('admin.contactUs.*') ? 'active' : '' }}">
                    {{ __('Contact Us') }}
                </a>

            </div>
        </div>
    </li>

    <li>
        <a class="menu {{ request()->routeIs('admin.pusher.*', 'admin.mailConfig.*', 'admin.paymentGateway.*', 'admin.sms-gateway.*') ? 'active' : '' }}"
            data-bs-toggle="collapse" href="#thirdpartConfig" title="Third Party configuration">
            <span>
                <i class="bi bi-boxes menu-icon"></i>
                {{ __('3rd Party Config') }}
            </span>
            <img src="{{ asset('assets/icons/arrowDown.svg') }}" alt="" class="downIcon">
        </a>
        <div class="collapse dropdownMenuCollapse {{ $request->routeIs('admin.pusher.*', 'admin.mailConfig.*', 'admin.paymentGateway.*', 'admin.sms-gateway.*') ? 'show' : '' }}"
            id="thirdpartConfig">
            <div class="listBar">
                <a href="{{ route('admin.paymentGateway.index') }}"
                    class="subMenu {{ request()->routeIs('admin.paymentGateway.*') ? 'active' : '' }}">
                    {{ __('Payment Gateway') }}
                </a>

                <a href="{{ route('admin.sms-gateway.index') }}"
                    class="subMenu {{ request()->routeIs('admin.sms-gateway.*') ? 'active' : '' }}">
                    {{ __('SMS Gateway') }}
                </a>

                <a href="{{ route('admin.pusher.index') }}"
                    class="subMenu {{ request()->routeIs('admin.pusher.*') ? 'active' : '' }}">
                    {{ __('Pusher Setup') }}
                </a>

                <a href="{{ route('admin.mailConfig.index') }}"
                    class="subMenu {{ request()->routeIs('admin.mailConfig.*') ? 'active' : '' }}">
                    {{ __('Mail Config') }}
                </a>

                <a href="{{ route('admin.firebase.index') }}"
                    class="subMenu {{ request()->routeIs('admin.firebase.*') ? 'active' : '' }}">
                    {{ __('Firebase Notification') }}
                </a>

            </div>
        </div>
    </li>

    <!--- Languages --->
    <li class="menu-divider">
        <span class="menu-title">{{ __('LANGUAGE MANAGEMENT') }}</span>
    </li>
    <li>
        <a href="{{ route('admin.language.index') }}"
            class="menu {{ request()->routeIs('admin.language.*') ? 'active' : '' }}">
            <span>
                <i class="fa-solid fa-language menu-icon"></i>
                {{ __('Languages') }}
            </span>
        </a>
    </li>

    <li class="menu-divider">
        <span class="menu-title">{{ __('Import / Export') }}</span>
    </li>
    <li>
        <a class="menu {{ $request->routeIs('shop.bulk-product-export.*') ? 'active' : '' }}"
            href="{{ route('shop.bulk-product-export.index') }}">
            <span>
                <i class="fa-solid fa-download menu-icon"></i>
                {{ __('Bulk Export') }}
            </span>
        </a>
    </li>

    <li>
        <a class="menu {{ $request->routeIs('shop.bulk-product-import.*') ? 'active' : '' }}"
            href="{{ route('shop.bulk-product-import.index') }}">
            <span>
                <i class="fa-solid fa-upload menu-icon"></i>
                {{ __('Bulk Import') }}
            </span>
        </a>
    </li>

    <!--- gallery --->
    <li>
        <a class="menu {{ $request->routeIs('shop.gallery.*') ? 'active' : '' }}"
            href="{{ route('shop.gallery.index') }}">
            <span>
                <i class="fa-solid fa-file-image menu-icon"></i>
                {{ __('Gallery Import') }}
            </span>
        </a>
    </li>

    <li class="menu-divider">
        <span class="menu-title">{{ __('Supports') }}</span>
    </li>
    <!--- Support Tickets --->
    <li>
        <a href="{{ route('admin.supportTicket.index') }}"
            class="menu {{ request()->routeIs('admin.supportTicket.*') ? 'active' : '' }}">
            <span>
                <i class="bi bi-ticket-perforated menu-icon"></i>
                {{ __('Support Tickets') }}
            </span>
        </a>
    </li>

    <!--- Support Messages --->
    <li>
        <a href="{{ route('admin.support.index') }}"
            class="menu {{ request()->routeIs('admin.support.*') ? 'active' : '' }}">
            <span>
                <i class="bi bi-chat-right-text menu-icon"></i>
                {{ __('Contact Messages') }}
            </span>
        </a>
    </li>
@endhasanyrole
