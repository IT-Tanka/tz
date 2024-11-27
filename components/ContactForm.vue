
<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { useNotificationStore } from '@/stores/notifications';

// Определяем схему валидации через yup
const schema = yup.object({
  name: yup.string().required('Введите ваше имя'),
  phone: yup
    .string()
    .matches(
      /^\+?\d{10,15}$/,
      'Введите корректный номер телефона (10-15 цифр, возможно с +)'
    )
    .required('Введите номер телефона'),
});

// Используем vee-validate
const { handleSubmit } = useForm({
  validationSchema: schema,
});

// Подключаем поля
const { value: name, errorMessage: nameError } = useField('name');
const { value: phone, errorMessage: phoneError } = useField('phone');

// Pinia store для уведомлений
const notificationStore = useNotificationStore();

// Обработка отправки формы
const onSubmit = handleSubmit(async (values) => {
  console.log('values', values);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  const result = await response.json();

  // Уведомление через store
  notificationStore.addNotification({
    message: `Спасибо, ${values.name}! Мы свяжемся с вами по номеру ${values.phone}. Ваши данные: ${JSON.stringify(result)}`,
  });

  });
</script>

<template>
  <form @submit.prevent="onSubmit"
    class="grid grid-cols-1  md:grid-cols-2 gap-y-[29px] md:gap-y-[55px]  md:gap-x-[45px] lg:w-[503px] max-w-[545px] w-full">
    <div class="w-full sm:w-[225px] rounded-[37px]">
      <input v-model="name" id="name" name="name" placeholder="Ваше имя"
        class="w-full px-4 py-4 rounded-[37px] text-[18px] leading-[140%] font-sans text-gray-700 pl-[34px] mb-[15px] md:mb-0" />
      <span v-if="nameError" class="text-red-500 text-sm">{{ nameError }}</span>
    </div>

    <div class="w-full sm:w-[225px] rounded-[37px]">
      <input v-model="phone" id="phone" name="phone" placeholder="Ваш телефон"
        class="w-full px-4 py-4 rounded-[37px] text-[18px] leading-[140%] font-sans text-gray-700 pl-[34px]" />
      <span v-if="phoneError" class="text-red-500 text-sm">{{ phoneError }}</span>
    </div>

    <p class="w-[225px] order-3 md:order-4">
      Наш менеджер свяжется с вами в течение дня
    </p>

    <button type="submit"
      class="bg-button text-textWhite py-4 px-4 rounded-[37px] hover:bg-red-600 w-[225px] order-4 md:order-3">
      Записаться
    </button>
  </form>
</template>