import { useLaravelReactI18n } from 'laravel-react-i18n';

export function PrivacyContact() {
    const { currentLocale } = useLaravelReactI18n();
    const isEnglish = currentLocale() === 'en';

    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-lg border-2 border-white/10 bg-linear-to-br from-emerald-500/10 to-teal-600/10 p-8 text-center backdrop-blur-sm md:p-12">
                    <h2 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">{isEnglish ? 'Contact Us' : '联系我们'}</h2>
                    <p className="mx-auto mb-6 max-w-2xl text-base text-slate-300 md:text-lg">
                        {isEnglish
                            ? 'If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:'
                            : '如果您对本隐私政策有任何疑问, 顾虑或请求, 请通过以下方式联系我们:'}
                    </p>
                    <div className="text-slate-300">
                        <p className="text-base md:text-lg">
                            <strong className="text-white">{isEnglish ? 'Email: ' : '邮箱: '}</strong>
                            <a href="mailto:contact@bluepinefoundation.com" className="text-emerald-300 transition-colors hover:text-emerald-200">
                                contact@bluepinefoundation.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
