<script setup></script>

<template>
  <section class="py-10 md:py-20 bg-bgPink">
    <div class="max-w-576px px-4 md:px-0 lg:max-w-636px mx-auto font-sanstc">
      <h3
        class="text-2xl md:text-5xl font-bold text-primaryDark text-center mb-6 md:mb-12"
      >
        聯絡我們
      </h3>
      <p class="mb-6 text-black text-base lg:text-xl">
        我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
      </p>

      <!-- form -->
      <form>
        <label for="name" class="inline-block mb-2">姓名</label>
        <input
          type="text"
          id="name"
          placeholder="陳小明"
          class="w-full py-1.5 px-3 placeholder-opacity-50 border mb-4"
          required
        />
        <label for="tel" class="inline-block mb-2">聯絡電話</label>
        <input
          type="tel"
          id="tel"
          pattern="09[1-9]{2}-[0-9]{3}-[0-9]{3}"
          placeholder="0912-345-678"
          class="w-full py-1.5 px-3 placeholder-opacity-50 border mb-4 font-roboto"
          required
        />
        <label for="mail" class="inline-block mb-2">電子郵件</label>
        <input
          type="email"
          id="mail"
          placeholder="example@email.com"
          class="w-full py-1.5 px-3 placeholder-opacity-50 border mb-4 font-roboto"
          required
        />
        <label for="comment" class="inline-block mb-2">意見反應</label>
        <textarea
          id="comment"
          rows="5"
          placeholder="請輸入您的意見"
          class="w-full py-1.5 px-3 placeholder-opacity-50 border mb-4 resize-none"
        ></textarea>
        <label
          for="privacyCheck"
          class="grid grid-cols-[16px,1fr] md:items-center gap-x-1 mb-12"
        >
          <input
            type="checkbox"
            id="privacyCheck"
            class="border-2 w-4 h-4 <md: mt-1"
            required
          />
          <span>
            我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
          </span>
        </label>

        <div align="center">
          <button
            type="submit"
            class="py-4 px-24 bg-primary text-white focus:(ring ring-primaryDark ring-opacity-50 ring-offset-2)"
          >
            確認送出
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
