<template>
  <section
    class="
      pb-6
      min-h-[80vh]
      container
      flex flex-col
      md:flex-row
      md:items-center
      md:justify-between
    "
  >
    <div class="text-white md:order-last text-center">
      <div class="relative w-[300px] lg:w-[500px] mx-auto">
        <img
          src="../assets/person.jpg"
          class="
            object-cover
            absolute
            top-1/2
            left-1/2
            transform
            translate-x-[-70%] translate-y-[-28%]
            rounded-full
            w-[150px]
            h-[150px]
            lg:w-[200px]
            lg:h-[200px]
          "
          alt=""
        />
        <img src="../assets/shape.png" class="w-full" alt="" />
      </div>
    </div>
    <div class="text-center md:text-left mt-2 space-y-4 md:space-y-6 md:max-w-md">
      <h2 class="text-white font-semibold text-3xl md:text-5xl">
        Desing & <br />
        Development
      </h2>
      <p class="text-sm text-gray-300 md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        cupiditate ipsum tempore totam accusantium tenetur quas labore aperiam
        corporis magni?
      </p>
      <div class="flex w-[fit-content] mx-auto md:mx-0 space-x-2">
        <button class="btn btn-primary">Hire Me </button>
        <button class="btn btn-outline-primary">Contact Now</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
