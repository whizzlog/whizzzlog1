<?php

namespace App\Http\Requests;

use App\Rules\CurrentPassword;
use Illuminate\Foundation\Http\FormRequest;

class PasswordChange extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'old_password' => ['required',new CurrentPassword],
            'password' => ['required','confirmed','different:old_password'],
            'password_confirmation' => ['required', 'min:6'],
        ];
    }
    public function attributes(){
       return array(
         'old_password' => 'current password'
       );
    }
}
