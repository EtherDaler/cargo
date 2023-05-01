from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _
from .models import User
from countries.models import Countries


class UserCreationForm(forms.ModelForm):
    """A form for creating new users. Includes all the required
    fields, plus a repeated password."""
    choices = tuple(('+'+str(country.code), '+'+str(country.code)) for country in Countries.objects.all())
    country_code = forms.ChoiceField(choices=choices)
    #phone = forms.CharField(max_length=20, label='Phone')
    #email = forms.EmailField(label='Email')
    password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Подтверждение пароля', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('phone', 'email')

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

    def __init__(self, *args, **kwargs):
        super(UserCreationForm, self).__init__(*args, **kwargs)
        self.fields['country_code'].widget.attrs \
            .update(
            {
                'class': "code-field",
                'placeholder': 'Код...',
                'style':""
            }
        )
        self.fields['phone'].widget.attrs \
            .update(
            {
                'class': "phone-field",
                'placeholder': '123456789',
                'style': ""
            }
        )
        self.fields['email'].widget.attrs \
            .update(
            {
                "class": "email-field",
                "placeholder": "example@example.com",
                "style": ""
            }
        )
        self.fields['password1'].widget.attrs \
            .update(
            {
                'class': "form-control",
                'placeholder': 'Пароль...'
            }
        )
        self.fields['password2'].widget.attrs \
            .update(
            {
                'class': "form-control",
                'placeholder': 'Еще раз...'
            }
        )



class UserChangeForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('email', 'first_name')
        labels = {'email': 'Email', 'first_name': 'Имя'}

    def __init__(self, *args, **kwargs):
        super(UserChangeForm, self).__init__(*args, **kwargs)
        self.fields['email'].widget.attrs \
            .update(
            {
                'class': "form-control",
                'placeholder': 'Email...'
            }
        )
        self.fields['first_name'].widget.attrs \
            .update(
            {
                'class': "form-control",
                'placeholder': 'Имя...'
            }
        )



class UserCreationFormAdmin(forms.ModelForm):
    """A form for creating new users. Includes all the required
    fields, plus a repeated password."""

    password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Подтверждение пароля', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('phone',)

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

