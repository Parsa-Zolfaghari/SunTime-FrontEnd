const BASE_URL = 'https://sun-time-project-backend-mu.vercel.app';

const signupForm = document.querySelector('.auth-form');
const submitButton = document.querySelector('.auth-submit');

signupForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const fullNameValue = document.getElementById('signup-name').value.trim();
    const emailValue = document.getElementById('signup-email').value.trim();
    const passwordValue = document.getElementById('signup-password').value;
    const confirmPasswordValue = document.getElementById('signup-confirm-password').value;

    if (!fullNameValue || !emailValue || !passwordValue || !confirmPasswordValue) {
        alert('لطفاً تمامی اطلاعات خود را بنویسید.');
        return; // توقف اجرای کد
    }

    if (passwordValue.length < 6) {
        alert('رمز عبور باید حداقل ۶ کاراکتر باشد.');
        return;
    }

    if (passwordValue !== confirmPasswordValue) {
        alert('رمز عبور و تکرار آن با هم مطابقت ندارند.');
        return;
    }

    const requestData = {
        fullName: fullNameValue,
        email: emailValue,
        password: passwordValue
    };


    try {
        // تغییر وضعیت دکمه تا کاربر بفهمد سیستم در حال کار است
        submitBtn.innerHTML = 'در حال ثبت‌نام...';
        submitBtn.disabled = true; // غیرفعال کردن دکمه تا کاربر چندبار کلیک نکند

        // استفاده از دستور fetch برای زدن API
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST', // متد ارسال اطلاعات
            headers: {
                'Content-Type': 'application/json' // به بک‌اند می‌گوییم دیتای ما از نوع JSON است
            },
            body: JSON.stringify(requestData) // تبدیل آبجکت به متن JSON
        });

        // تبدیل جواب بک‌اند به فرمتی که جاوااسکریپت می‌فهمد
        const result = await response.json();

        // ۸. چک کردن جواب بک‌اند (طبق داکیومنت باید success برابر true باشد)
        if (result.success === true) {

            // ثبت‌نام موفق! 
            // ایمیل رو توی localStorage ذخیره می‌کنیم تا تو صفحه "تایید ایمیل" بتونیم ازش استفاده کنیم
            localStorage.setItem('suntime_user_email', emailValue);

            alert('ثبت‌نام با موفقیت انجام شد. لطفاً ایمیل خود را تایید کنید.');

            // انتقال کاربر به صفحه تایید ایمیل
            window.location.href = 'email-vertification.html';

        } else {
            // اگر بک‌اند ارور داد (مثلا گفت این ایمیل قبلاً ثبت نام کرده)
            alert('خطا در ثبت‌نام: ' + result.message);

            // برگرداندن دکمه به حالت اولیه
            submitBtn.innerHTML = 'ثبت‌نام';
            submitBtn.disabled = false;
        }

    } catch (error) {
        // این قسمت فقط زمانی اجرا میشه که اینترنت قطع باشه یا سرور کلاً خاموش باشه
        console.error('Error:', error);
        alert('خطا در برقراری ارتباط با سرور بک‌اند.');

        // برگرداندن دکمه به حالت اولیه
        submitBtn.innerHTML = 'ثبت‌نام';
        submitBtn.disabled = false;
    }
});