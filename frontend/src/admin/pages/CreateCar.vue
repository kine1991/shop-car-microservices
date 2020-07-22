<template>
  <div class="create-car-container">
    <div class="my-1">
      <v-btn text small to="/admin/cars">
        <v-icon dark left>mdi-arrow-left</v-icon> Back
      </v-btn>
    </div>
    <h1>Create Car</h1>
    <form class="form">
      <v-combobox label="Brand" :items="brandList" outlined @input="$v.brand.$touch()" @blur="$v.brand.$touch()" v-model="brand" :error-messages="brandErrors"></v-combobox>
      <v-text-field label="Model" outlined @input="$v.model_car.$touch()" @blur="$v.model_car.$touch()" v-model="model_car" :error-messages="modelCarErrors"></v-text-field>
      <v-text-field label="Image Url" outlined @input="$v.year.$touch()" @blur="$v.imageUrl.$touch()" v-model="imageUrl" :error-messages="imageUrlErrors"></v-text-field>
      <v-text-field label="Year" type="number" outlined @input="$v.year.$touch()" @blur="$v.year.$touch()" v-model="year" :error-messages="yearErrors"></v-text-field>
      <v-text-field label="Price" type="number" outlined @input="$v.price.$touch()" @blur="$v.price.$touch()" v-model="price" :error-messages="priceErrors"></v-text-field>
      <v-combobox v-model="color" :items="colorList" label="Color" outlined @input="$v.color.$touch()" @blur="$v.color.$touch()" :error-messages="colorErrors"></v-combobox>
      <v-select :items="typeList" v-model="type" @change="$v.type.$touch()" @blur="$v.type.$touch()" label="Select Types" :error-messages="typeErrors" outlined></v-select>
      <v-select :items="transmissionList" v-model="transmission" @change="$v.transmission.$touch()" @blur="$v.transmission.$touch()" label="Select Transmissions" :error-messages="transmissionErrors" outlined></v-select>
      <v-select :items="driveTrainList" v-model="drive_train" @change="$v.drive_train.$touch()" @blur="$v.drive_train.$touch()" label="Select drive train" :error-messages="driveTrainErrors" outlined></v-select>
      <v-select :items="fluelTypeList" v-model="fluel_type" @change="$v.fluel_type.$touch()" @blur="$v.fluel_type.$touch()" label="Select fluel type" :error-messages="fluelTypeErrors" outlined></v-select>
      <v-text-field label="Description" outlined @input="$v.description.$touch()" @blur="$v.description.$touch()" v-model="description" :error-messages="descriptionErrors"></v-text-field>
      <v-btn @click="submit">Submit</v-btn>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { validationMixin } from 'vuelidate';
  import { required, minLength, maxLength, between, url, numeric  } from 'vuelidate/lib/validators';

  export default {
    mixins: [validationMixin],
    data: () => ({
      brand: 'brand1',
      model_car: 'model_car1',
      imageUrl: 'https://sun9-35.userapi.com/IN1iK9ePOa3rWzh8JnoTiBK7HqjZSb6vPzaepw/fRAecCz9TUg.jpg',
      year: 2020,
      price: 10000,
      transmission: 'manual',
      drive_train: '4wd',
      fluel_type: 'gasoline',
      color: 'red',
      type: 'sport',
      description: 'lorem insup lorem insup lorem insup lorem insup lorem insup lorelorem insuplorem insuplorem insuplorem insuplorem insuplorem insuplorem insuplorem insuplorem insuplorem insuplorem insuplorem insupm insup lorem insup lorem insuplorem insup',
      // --- //
      transmissionList: ['manual', 'automatic'],
      driveTrainList: ['awd', 'rwd', 'fwd', '4wd'],
      fluelTypeList: ['gasoline', 'diesel', 'electric', 'gas'],
      typeList: [],
      colorList: [],
      brandList: [],
    }),
    validations: {
      brand: { required, minLength: minLength(2), maxLength: maxLength(25) },
      model_car: { required, minLength: minLength(2), maxLength: maxLength(50) },
      imageUrl: { required, url },
      year: { required, between: between(1900, new Date().getFullYear()) },
      price: { required, numeric },
      transmission: { required },
      drive_train: { required },
      fluel_type: { required },
      color: { required },
      type: { required },
      description: { required, minLength: minLength(100), maxLength: maxLength(2500) },
    },
    computed: {
      brandErrors() {
        const errors = [];
        if(!this.$v.brand.$dirty) return errors;
        !this.$v.brand.maxLength && errors.push('Brand should be 25 or less symbols');
        !this.$v.brand.minLength && errors.push('Brand should be 2 or more symbols');
        !this.$v.brand.required && errors.push('Brand is require');
        return errors;
      },
      modelCarErrors() {
        const errors = [];
        if(!this.$v.model_car.$dirty) return errors;
        !this.$v.model_car.maxLength && errors.push('Car Model should be 50 or less symbols');
        !this.$v.model_car.minLength && errors.push('Car Model should be 2 or more symbols');
        !this.$v.model_car.required && errors.push('Car Model is require');
        return errors;
      },
      imageUrlErrors() {
        const errors = [];
        if(!this.$v.imageUrl.$dirty) return errors;
        !this.$v.imageUrl.required && errors.push('Image Url is require');
        !this.$v.imageUrl.url && errors.push('Image Url do not match formt url');
        return errors;
      },
      yearErrors() {
        const errors = [];
        if(!this.$v.year.$dirty) return errors;
        !this.$v.year.required && errors.push('Year is require');
        !this.$v.year.between && errors.push(`Year should be between 1900 and ${new Date().getFullYear()}`);
        return errors;
      },
      priceErrors() {
        const errors = [];
        if(!this.$v.price.$dirty) return errors;
        !this.$v.price.required && errors.push('Price is require');
        !this.$v.price.numeric && errors.push(`Price should be numeric format`);
        return errors;
      },
      typeErrors() {
        const errors = [];
        if(!this.$v.type.$dirty) return errors;
        !this.$v.type.required && errors.push('Type is require');
        return errors;
      },
      colorErrors() {
        const errors = [];
        if(!this.$v.color.$dirty) return errors;
        !this.$v.color.required && errors.push('Color is require');
        return errors;
      },
      transmissionErrors() {
        const errors = [];
        if(!this.$v.transmission.$dirty) return errors;
        !this.$v.transmission.required && errors.push('Transmission is require');
        return errors;
      },
      driveTrainErrors() {
        const errors = [];
        if(!this.$v.drive_train.$dirty) return errors;
        !this.$v.drive_train.required && errors.push('Drive train is require');
        return errors;
      },
      fluelTypeErrors() {
        const errors = [];
        if(!this.$v.fluel_type.$dirty) return errors;
        !this.$v.fluel_type.required && errors.push('Fluel type is require');
        return errors;
      },
      descriptionErrors() {
        const errors = [];
        if(!this.$v.description.$dirty) return errors;
        !this.$v.description.maxLength && errors.push('Description should be 2500 or less symbols');
        !this.$v.description.minLength && errors.push('Description should be 100 or more symbols');
        !this.$v.description.required && errors.push('Description is require');
        return errors;
      },
      ...mapGetters(['getFilter']),
    },
    methods: {
      ...mapActions(['fetchFilter', 'createCar']),
      submit() {
        const data = {
          brand: this.brand,
          model_car: this.model_car,
          imageUrl: this.imageUrl,
          year: this.year,
          price: this.price,
          transmission: this.transmission,
          drive_train: this.drive_train,
          fluel_type: this.fluel_type,
          color: this.color,
          type: this.type,
          description: this.description,
        };

        this.createCar(data).then(data => {
          console.log('data', data)
          this.$router.push('/admin/cars');
        });
      }
    },
    created() {
      this.fetchFilter();      
    },
    watch: {
      '$store.state.cars.filter': function() {
        // console.log('@watch', this.$store.state.cars.filter);
        this.colorList = this.$store.state.cars.filter.colors;
        this.typeList = this.$store.state.cars.filter.types;
        this.brandList = this.$store.state.cars.filter.brands;
      }
    }
}
</script>

<style lang="scss" scoped>
  .create-car-container {
    padding: 3rem;
  }
</style>