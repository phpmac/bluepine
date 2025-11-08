<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'resend' => [
        'key' => env('RESEND_KEY'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'apip' => [
        'uri' => env('APIP_URL', 'https://apip.io/api/'),
        'app_id' => env('APIP_APP_ID', 'aesc-CnrHiKHln3ngaFDNzWnIwHfHDjh3SOCWEQIkU44Helo4859IBlHPbIKlt9S'),
        'app_key' => env('APIP_APP_KEY', 'rxS2euIi0fI3tR75fFdPjIbGVe7p8qlfAUUbLimkU7DhCvsmK5005p5uauoQVOhg'),
    ],

    'admin_email' => env('ADMIN_EMAIL', 'a@vc.sb'),

];
