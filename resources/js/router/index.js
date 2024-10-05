// resources/js/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// import layouts
import defaultLayout from "../layouts/default.vue";
import authLayout from "../layouts/auth.vue";

// import pages
const Home = () => import("../pages/Home.vue");
const Shop = () => import("../pages/Shop.vue");
const ShopDetails = () => import("../pages/ShopDetails.vue");
const ShopCategoryProduct = () => import("../pages/ShopCategoryProduct.vue");
const ProductDetails = () => import("../pages/ProductDetails.vue");
const CategoryProduct = () => import("../pages/CategoryProduct.vue");
const Checkout = () => import("../pages/Checkout.vue");

const Dashboard = () => import("../pages/Dashboard.vue");
const OrderHistory = () => import("../pages/OrderHistory.vue");
const OrderDetails = () => import("../pages/OrderDetails.vue");
const Wishlist = () => import("../pages/Wishlist.vue");
const MyProfile = () => import("../pages/MyProfile.vue");
const ManageAddress = () => import("../pages/ManageAddress.vue");
const Support = () => import("../pages/Support.vue");
const TermsAndConditions = () => import("../pages/TermsAndConditions.vue");
const PrivacyPolicy = () => import("../pages/PrivacyPolicy.vue");
const AddNewAddress = () => import("../pages/AddNewAddress.vue");
const EditAddress = () => import("../pages/EditAddress.vue");
const AboutUs = () => import("../pages/AboutUs.vue");
const ChangePassword = () => import("../pages/ChangePassword.vue");
const BuyNow = () => import("../pages/BuyNow.vue");
const MostPopular = () => import("../pages/MostPopular.vue");
const ContactUs = () => import("../pages/ContactUs.vue");
const BestDeal = () => import("../pages/BestDeal.vue");
const Products = () => import("../pages/Products.vue");
const Category = () => import("../pages/Category.vue");
const SupportTicket = () => import("../pages/SupportTicket.vue")
const SupportTicketDetails = () => import("../pages/SupportTicketDetails.vue");

// all pages router will be here
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/shops",
        name: "shop",
        component: Shop,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/products",
        name: "products",
        component: Products,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/categories",
        name: "categories",
        component: Category,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/most-popular",
        name: "most-popular",
        component: MostPopular,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/best-deal",
        name: "best-deal",
        component: BestDeal,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/shops/:id",
        name: "shop-detail",
        component: ShopDetails,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/shops/:id/categories/:slug",
        name: "shop-category-product",
        component: ShopCategoryProduct,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/products/:id/details",
        name: "productDetails",
        component: ProductDetails,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/categories/:slug",
        name: "category-product",
        component: CategoryProduct,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/checkout",
        name: "checkout",
        component: Checkout,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/buynow",
        name: "buynow",
        component: BuyNow,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
            layout: authLayout,
        },
    },
    {
        path: "/order-history",
        name: "order-history",
        component: OrderHistory,
        meta: {
            layout: authLayout,
        },
    },
    {
        path: "/order-history/:id",
        name: "order-details",
        component: OrderDetails,
        meta: {
            layout: authLayout,
        },
    },
    {
        path: "/wishlist",
        name: "wishlist",
        component: Wishlist,
        meta: {
            layout: authLayout,
        },
    },
    {
        path: "/profile",
        name: "profile",
        component: MyProfile,
        meta: {
            layout: authLayout,
        },
    },
    {
        path: "/manage-address",
        name: "manage-address",
        component: ManageAddress,
        meta: {
            layout: authLayout,
        },
    },
    {
        path: "/manage-address/new",
        name: "add-new-address",
        component: AddNewAddress,
        meta: {
            layout: authLayout,
        },
    },
    {
        path: "/manage-address/:id/edit",
        name: "edit-address",
        component: EditAddress,
        meta: {
            layout: authLayout,
        },
    },
    {
        path: "/change-password",
        name: "change-password",
        component: ChangePassword,
        meta: {
            layout: authLayout,
        },
    },
    {
        path: "/support-tickets",
        name: "support-ticket",
        component: SupportTicket,
        meta: {
            layout: authLayout,
        },
    },
    {
        path: "/support-ticket/:ticketNumber",
        name: "support-ticket-details",
        component: SupportTicketDetails,
        meta: {
            layout: authLayout,
        },
    },

    {
        path: "/support",
        name: "support",
        component: Support,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/terms-and-conditions",
        name: "terms-and-conditions",
        component: TermsAndConditions,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/privacy-policy",
        name: "privacy-policy",
        component: PrivacyPolicy,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/about-us",
        name: "about-us",
        component: AboutUs,
        meta: {
            layout: defaultLayout,
        },
    },
    {
        path: "/contact-us",
        name: "contact-us",
        component: ContactUs,
        meta: {
            layout: defaultLayout,
        },
    },
];

// create router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
