![Development](https://github.com/thinc-org/open-reg-frontend/workflows/Build%20and%20Test/badge.svg?branch=dev)
![Production](https://github.com/thinc-org/open-reg-frontend/workflows/Build%20and%20Test/badge.svg?branch=master)

# OpenRegFrontend

## environments

- development URL: https://development-frontend-open-reg.now.sh -- lastest pull request to dev
- staging URL: https:frontend-open-reg.now.sh -- dev branch
- production URL: https://frontend.openreg.thinc.in.th/ -- master branch

## eol problem

in windows end of line is define by '\r\n' in unix it is '\n'
we fix this issue by define core.autocrlf in .git/config as false

## Deploy to Vercel

เราใช้ทริคนิดหน่อยในการ deploy สอง domain ลง vercel โดยปกติแล้วตัว Vercel จะรองรับการ deploy หลาย domain ก็ต่อเมื่อใช้ github integration โดยตรงเท่านั้น

เนื่องจากเราต้องการทำ Unit Testing โดยใข้ github actions เราด้วยเลยไม่ใช้วิธีที่กล่าวมา เราเลือกที่จะสร้าง vercel config สอง ไฟล์ คือ vercel.json กับ vercel-staging.json แทนแล้วตั้ง alias ไว้ให้แต่ล่ะ config deploy ไปยัง domain ที่เราต้องการ แต่วิธีนี้ติดปัญหาอยู่อย่างว่าเราเคย Assign domain ให้ openreg ใน vercel console ไปแล้วซึ่งทำให้ตัว Vercel ไม่สนใจ alias domain ใน config ของเรา

เราพบว่าพอเพิ่ม deploy branch ให้แต่ล่ะ domain ที่ Vercel console แล้ว
config ของเราสามารถ overwrite domain name เหล่านั้นได้ :)

![image](https://user-images.githubusercontent.com/12471844/84898405-66f1d680-b0d1-11ea-8c9d-a4f972feb50b.png)
