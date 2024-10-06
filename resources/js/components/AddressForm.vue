<template>
    <div class="p-6 bg-white rounded-2xl border border-slate-200 mt-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- First Name -->
                <div>
                    <label for="first_name" class="form-label mb-2"> {{ $t('First Name') }}
                        <small class="text-red-500">*</small>
                    </label>
                    <input type="text" id="first_name" v-model="formData.first_name"
                        :placeholder="$t('Enter first name')" class="form-input"
                        :class="errors && errors?.first_name ? 'border-red-500' : 'border-slate-200'">
                    <span v-if="errors && errors?.first_name" class="text-red-500 text-sm">{{ errors?.first_name[0]
                        }}</span>
                </div>

                <!-- Last Name -->
                <div>
                    <label for="last_name" class="form-label mb-2"> {{ $t('Last Name') }}
                        <small class="text-red-500">*</small>
                    </label>
                    <input type="text" id="last_name" v-model="formData.last_name" :placeholder="$t('Enter last name')"
                        class="form-input" :class="errors && errors?.last_name ? 'border-red-500' : 'border-slate-200'">
                    <span v-if="errors && errors?.last_name" class="text-red-500 text-sm">{{ errors?.last_name[0]
                        }}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <!-- Email Address -->
                <div>
                    <label for="email" class="form-label mb-2"> {{ $t('Email Address') }}
                        <small class="text-red-500">*</small>
                    </label>
                    <input type="email" id="email" v-model="formData.email" :placeholder="$t('Enter email address')"
                        class="form-input" :class="errors && errors?.email ? 'border-red-500' : 'border-slate-200'">
                    <span v-if="errors && errors?.email" class="text-red-500 text-sm">{{ errors?.email[0] }}</span>
                </div>

                <!-- Phone -->
                <div>
                    <label for="phone" class="form-label mb-2"> {{ $t('Phone') }}
                        <small class="text-red-500">*</small>
                    </label>
                    <input type="text" id="phone" v-model="formData.phone" :placeholder="$t('Enter phone')"
                        class="form-input" :class="errors && errors?.phone ? 'border-red-500' : 'border-slate-200'">
                    <span v-if="errors && errors?.phone" class="text-red-500 text-sm">{{ errors?.phone[0] }}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <!-- Country -->
                <div>
                    <label for="country" class="form-label mb-2">{{ $t('Country') }}
                        <small class="text-red-500">*</small>
                    </label>
                    <select id="country" v-model="formData.country" class="form-input"
                        :class="errors && errors?.country ? 'border-red-500' : 'border-slate-200'">
                        <option value="" disabled>{{ $t('Select country') }}</option>
                        <option value="Bahrain">{{ $t('Bahrain') }}</option>
                        <option value="Kuwait">{{ $t('Kuwait') }}</option>
                        <option value="Oman">{{ $t('Oman') }}</option>
                        <option value="Qatar">{{ $t('Qatar') }}</option>
                        <option value="Saudi Arabia">{{ $t('Saudi Arabia') }}</option>
                        <option value="United Arab Emirates">{{ $t('United Arab Emirates') }}</option>
                    </select>
                    <span v-if="errors && errors?.country" class="text-red-500 text-sm">{{ errors?.country[0] }}</span>
                </div>

                <!-- City -->
                <div>
                    <label for="city" class="form-label mb-2">{{ $t('City') }}
                        <small class="text-red-500">*</small>
                    </label>

                    <!-- If Kuwait is selected, show select for cities -->
                    <select v-if="formData.country === 'Kuwait'" id="city" v-model="formData.city" class="form-input"
                        :class="errors && errors?.city ? 'border-red-500' : 'border-slate-200'">
                        <option value="" disabled>{{ $t('Select city') }}</option>
                        <option value="Abo hasanya">Abo hasanya</option>
                        <option value="Abu Fatira">Abu Fatira</option>
                        <option value="Al-Adan">Al-Adan</option>
                        <option value="Al-Masayel">Al-Masayel</option>
                        <option value="Fnaitees">Fnaitees</option>
                        <option value="Messila">Messila</option>
                        <option value="Mubarak Al Kabeer">Mubarak Al Kabeer</option>
                        <option value="Qosour">Qosour</option>
                        <option value="Qurain">Qurain</option>
                        <option value="Sabah Al Salem">Sabah Al Salem</option>
                        <option value="Sabhan">Sabhan</option>
                        <option value="Sabhan Industrial Area">Sabhan Industrial Area</option>
                        <option value="Souq Qurain">Souq Qurain</option>
                        <option value="West Abu Ftirah Hirafyia">West Abu Ftirah Hirafyia</option>
                        <option value="Abu Halifa">Abu Halifa</option>
                        <option value="Al-Daher">Al-Daher</option>
                        <option value="Al-Dubaiya">Al-Dubaiya</option>
                        <option value="Al-Ahmadi">Al-Ahmadi</option>
                        <option value="Al-Nuwaiseeb">Al-Nuwaiseeb</option>
                        <option value="Al-Zoor">Al-Zoor</option>
                        <option value="Ali Subah Al-Salem">Ali Subah Al-Salem</option>
                        <option value="East Ahmadi">East Ahmadi</option>
                        <option value="West Abdullah Al Mubarak">West Abdullah Al Mubarak</option>
                        <option value="Eqaila">Eqaila</option>
                        <option value="Fahad Al-Ahmad">Fahad Al-Ahmad</option>
                        <option value="Fahaheel">Fahaheel</option>
                        <option value="Fintas">Fintas</option>
                        <option value="Hadiya">Hadiya</option>
                        <option value="Jaber Al Ali">Jaber Al Ali</option>
                        <option value="Julaia">Julaia</option>
                        <option value="Khairan" data-price="1" data-price-type="">Khairan (+1&nbsp;KWD)</option>
                        <option value="Mahboula">Mahboula</option>
                        <option value="Mangaf">Mangaf</option>
                        <option value="Middle of Ahmadi">Middle of Ahmadi</option>
                        <option value="Mina Al-Ahmadi">Mina Al-Ahmadi</option>
                        <option value="New Wafra">New Wafra</option>
                        <option value="North Ahmadi">North Ahmadi</option>
                        <option value="Port of Shuaiba">Port of Shuaiba</option>
                        <option value="Riqqah">Riqqah</option>
                        <option value="Sabah Al-Ahmad" data-price="1" data-price-type="">Sabah Al-Ahmad
                            (+1&nbsp;KWD)</option>
                        <option value="Sabah Health Region">Sabah Health Region</option>
                        <option value="Shalayhat Al Dubaiya">Shalayhat Al Dubaiya</option>
                        <option value="Shalehat Bneder" data-price="1" data-price-type="">Shalehat Bneder
                            (+1&nbsp;KWD)</option>
                        <option value="Shalehat Mina Abdullah">Shalehat Mina Abdullah</option>
                        <option value="South Ahmadi">South Ahmadi</option>
                        <option value="Um Al Hayman" data-price="1" data-price-type="">Um Al Hayman (+1&nbsp;KWD)
                        </option>
                        <option value="Wafra" data-price="1" data-price-type="">Wafra (+1&nbsp;KWD)</option>
                        <option value="Abbasiya">Abbasiya</option>
                        <option value="Abdullah Al Mubarak">Abdullah Al Mubarak</option>
                        <option value="Al Shadadiya">Al Shadadiya</option>
                        <option value="Al Rabia">Al Rabia</option>
                        <option value="Al Rai">Al Rai</option>
                        <option value="Alrihab">Alrihab</option>
                        <option value="Andalous">Andalous</option>
                        <option value="Ardhiya">Ardhiya</option>
                        <option value="Ashbeliah">Ashbeliah</option>
                        <option value="Dajeej">Dajeej</option>
                        <option value="Farwaniya">Farwaniya</option>
                        <option value="Ferdous">Ferdous</option>
                        <option value="International Airport">International Airport</option>
                        <option value="Ishbiliya">Ishbiliya</option>
                        <option value="Jleeb Al Shyoukh">Jleeb Al Shyoukh</option>
                        <option value="Khaitan">Khaitan</option>
                        <option value="Omariah">Omariah</option>
                        <option value="Riggae">Riggae</option>
                        <option value="Sabah Al Nasser">Sabah Al Nasser</option>
                        <option value="Sheikh Saad Airport">Sheikh Saad Airport</option>
                        <option value="Al Bida'a">Al Bida'a</option>
                        <option value="Al Shuhada">Al Shuhada</option>
                        <option value="Al-Siddeeq">Al-Siddeeq</option>
                        <option value="Anjafa">Anjafa</option>
                        <option value="Bayan">Bayan</option>
                        <option value="Hateen">Hateen</option>
                        <option value="Hawally">Hawally</option>
                        <option value="Jabriya">Jabriya</option>
                        <option value="Maidan Hawally">Maidan Hawally</option>
                        <option value="Mishref">Mishref</option>
                        <option value="Mubarak Al-Abdullah (West Mishref)">Mubarak Al-Abdullah (West Mishref)
                        </option>
                        <option value="Nugra">Nugra</option>
                        <option value="Rumaithiya">Rumaithiya</option>
                        <option value="Salam">Salam</option>
                        <option value="Salmiya">Salmiya</option>
                        <option value="Salwa">Salwa</option>
                        <option value="Zahra">Zahra</option>
                        <option value="Jahra" data-price="1" data-price-type="">Jahra (+1&nbsp;KWD)</option>
                        <option value="Kabd" data-price="1" data-price-type="">Kabd (+1&nbsp;KWD)</option>
                        <option value="Naeem" data-price="1" data-price-type="">Naeem (+1&nbsp;KWD)</option>
                        <option value="Naseem" data-price="1" data-price-type="">Naseem (+1&nbsp;KWD)</option>
                        <option value="Oyoun" data-price="1" data-price-type="">Oyoun (+1&nbsp;KWD)</option>
                        <option value="Qasr" data-price="1" data-price-type="">Qasr (+1&nbsp;KWD)</option>
                        <option value="Saad AlAdullah" data-price="1" data-price-type="">Saad AlAdullah
                            (+1&nbsp;KWD)</option>
                        <option value="Sulaibiya" data-price="1" data-price-type="">Sulaibiya (+1&nbsp;KWD)</option>
                        <option value="Taima" data-price="1" data-price-type="">Taima (+1&nbsp;KWD)</option>
                        <option value="Waha" data-price="1" data-price-type="">Waha (+1&nbsp;KWD)</option>
                        <option value="Abdullah Al salim">Abdullah Al salim</option>
                        <option value="Adailiya">Adailiya</option>
                        <option value="Al Nahda">Al Nahda</option>
                        <option value="Bneid Al Qar">Bneid Al Qar</option>
                        <option value="Daiya">Daiya</option>
                        <option value="Dasma">Dasma</option>
                        <option value="Dasman">Dasman</option>
                        <option value="Doha">Doha</option>
                        <option value="Faiha">Faiha</option>
                        <option value="Ghornata">Ghornata</option>
                        <option value="Jaber Al Ahmad">Jaber Al Ahmad</option>
                        <option value="Kaifan">Kaifan</option>
                        <option value="Khaldiya">Khaldiya</option>
                        <option value="Kuwait City">Kuwait City</option>
                        <option value="Mansouriya">Mansouriya</option>
                        <option value="Mina Doha">Mina Doha</option>
                        <option value="Mirgab">Mirgab</option>
                        <option value="Mubarakiya">Mubarakiya</option>
                        <option value="Sulaibikhat">Sulaibikhat</option>
                        <option value="Nuzha">Nuzha</option>
                        <option value="Qadsiya">Qadsiya</option>
                        <option value="Qairawan">Qairawan</option>
                        <option value="Qibla">Qibla</option>
                        <option value="Qortuba">Qortuba</option>
                        <option value="Rawda">Rawda</option>
                        <option value="Salhiya">Salhiya</option>
                        <option value="Sawabir">Sawabir</option>
                        <option value="Shaab">Shaab</option>
                        <option value="Shamiya">Shamiya</option>
                        <option value="Sharq">Sharq</option>
                        <option value="Shuwaikh">Shuwaikh</option>
                        <option value="Shuwaikh Administrative">Shuwaikh Administrative</option>
                        <option value="Shuwaikh Residential">Shuwaikh Residential</option>
                        <option value="Surra">Surra</option>
                        <option value="Yarmouk">Yarmouk</option>
                        <option value="Sabah Al-Ahmad City" data-price="1" data-price-type="">Sabah Al-Ahmad City
                            (+1&nbsp;KWD)</option>
                    </select>

                    <!-- For other countries, show text input -->
                    <input v-else type="text" id="city" v-model="formData.city" :placeholder="$t('Enter city')"
                        class="form-input" :class="errors && errors?.city ? 'border-red-500' : 'border-slate-200'">

                    <span v-if="errors && errors?.city" class="text-red-500 text-sm">{{ errors?.city[0] }}</span>
                </div>
            </div>


            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <!-- Block -->
                <div>
                    <label for="block" class="form-label mb-2"> {{ $t('Block') }}</label>
                    <input type="text" id="block" v-model="formData.block" :placeholder="$t('Enter block')"
                        class="form-input" :class="errors && errors?.block ? 'border-red-500' : 'border-slate-200'">
                    <span v-if="errors && errors?.block" class="text-red-500 text-sm">{{ errors?.block[0] }}</span>
                </div>

                <!-- Street Number -->
                <div>
                    <label for="street_number" class="form-label mb-2"> {{ $t('Street Number') }}</label>
                    <input type="text" id="street_number" v-model="formData.street_number"
                        :placeholder="$t('Enter street number')" class="form-input"
                        :class="errors && errors?.street_number ? 'border-red-500' : 'border-slate-200'">
                    <span v-if="errors && errors?.street_number" class="text-red-500 text-sm">{{
                        errors?.street_number[0] }}</span>
                </div>

                <!-- House Number -->
                <div>
                    <label for="house_number" class="form-label mb-2"> {{ $t('House Number') }}</label>
                    <input type="text" id="house_number" v-model="formData.house_number"
                        :placeholder="$t('Enter house number')" class="form-input"
                        :class="errors && errors?.house_number ? 'border-red-500' : 'border-slate-200'">
                    <span v-if="errors && errors?.house_number" class="text-red-500 text-sm">{{ errors?.house_number[0]
                        }}</span>
                </div>
            </div>

            <div class="mt-4">
                <input type="checkbox" id="agreement" v-model="formData.agreement" class="w-4 h-4" />
                <label for="agreement" class="text-slate-500 text-sm font-normal leading-tight m-2">
                    {{ formData.country === 'Kuwait' ? 'Kuwait Shipment: 3 to 5 days from the order date.' : 'GCC Shipment: 7 to 10 days from the order date.' }}
                    <small class="text-red-500">*</small>
                </label>
            </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { useAuth } from '../stores/AuthStore';
import ToastSuccessMessage from './ToastSuccessMessage.vue';

const toast = useToast();
const route = useRoute();
const router = useRouter();
const authStore = useAuth();

const formData = ref({
    name: '',
    phone: '',
    area: '',
    flat_no: '',
    post_code: '',
    address_line: '',
    address_line2: '',
    address_type: 'home',
    langitude: '',
    longitude: '',
    is_default: false
});

const errors = ref({});

const content = {
    component: ToastSuccessMessage,
    props: {
        title: 'Address Added',
        message: 'Address added successfully',
    },
};

const addressFormSubmit = () => {
    axios.post('/address/store', formData.value, {
        headers: {
            'Authorization': authStore.token
        }
    }).then(() => {
        formData.value = {};
        authStore.fetchAddresses();
        toast(content, {
            type: "default",
            hideProgressBar: true,
            icon: false,
            position: "bottom-left",
            toastClassName: "vue-toastification-alert",
            timeout: 2000,
        });
        if (route.name === 'add-new-address') {
            router.push({ name: 'manage-address' })
        }
    }).catch((error) => {
        errors.value = error.response.data.errors
        toast.error(error.response.data.message, {
            position: "bottom-left",
        });
    })
}

</script>

<style scoped>
.form-label {
    @apply text-slate-700 text-base font-normal leading-normal;
}

.form-input {
    @apply p-3 rounded-lg border focus:border-primary w-full outline-none text-base font-normal leading-normal placeholder:text-slate-400;
}

.formInputCoupon {
    @apply rounded-lg border border-slate-200 focus:border-primary w-full outline-none text-base font-normal leading-normal placeholder:text-slate-400;
}

.radio-btn {
    @apply w-4 h-4 border appearance-none border-slate-300 rounded-full checked:bg-primary ring-primary checked:outline-1 outline-offset-1 checked:outline-primary checked:outline transition duration-100 ease-in-out m-0;
}

.radioBtn2 {
    @apply w-4 h-4 border appearance-none border-slate-300 rounded-full checked:bg-primary ring-primary checked:outline-1 outline-offset-1 checked:outline-primary checked:outline transition duration-100 ease-in-out m-0;
}
</style>
