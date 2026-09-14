import { Component, signal } from '@angular/core';
import { Product } from '../../services/products-service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  productForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(25)] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    imageUrl: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    brand: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    sku: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[A-Z]{3}[0-9]{3}$/)], //Checks for the right patten ^(start) then 3 uppercase letters and then 3 number $(end)
    }),
    price: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
    publishDate: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

 slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')  // any run of non a-z/0-9 chars → single hyphen
    .replace(/^-+|-+$/g, '');    // trim leading/trailing hyphens
}

   onSubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched(); // Makes all the inputs as tuchesd that then runs the validators.
      return;
    }

    const product: Product = {
      ...this.productForm.getRawValue(),
      slug: this.slugify(this.productForm.value.name!),
    };

    console.log(product);
  }
}
