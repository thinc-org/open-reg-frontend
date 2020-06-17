![Development](https://github.com/thinc-org/open-reg-frontend/workflows/Build%20and%20Test/badge.svg?branch=dev)
![Production](https://github.com/thinc-org/open-reg-frontend/workflows/Build%20and%20Test/badge.svg?branch=master)

# OpenRegFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.26.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## eol problem

in windows end of line is define by '\r\n' in unix it is '\n'
we fix this issue by define core.autocrlf in .git/config as false

## Deploy to Vercel

เราใช้ทริคนิดหน่อยในการ deploy 2 domain ลง vercel โดยปกติแล้วตัว Vercel จะรองรับการ deploy หลาย domain ก็ต่อเมื่อใช้ github integration โดยตรงเท่านั้น

เนื่องจากเราต้องการทำ Unit Testing โดยใข้ github actions เราด้วยเลยไม่ใช้วิธีนั้น เราเลือกที่จะใช้ vercel config 2 ไฟล์ คือ vercel.json กับ vercel-staging.json แทนแล้วตั้ง alias ไว้ว่าแต่ล่ะ config ให้ deploy ไปยัง domai ที่เราต้องการ แต่วิธีนี้ติดปัญหาอยู่ว่าเราเคย Assign domain ให้ openreg ใน vercel ไปแล้วซึ่งทำให้ตัว Vercel ไม่สนใจ alias domain ใน config ของเรา

เราพบว่าพอเพิ่ม deploy branch ให้แต่ล่ะ domain ที่ Vercel console config ของเราสามารถ overwrite domain name เหล่านั้นได้
