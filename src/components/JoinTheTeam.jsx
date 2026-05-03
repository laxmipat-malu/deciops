import { useState } from 'react';

export default function JoinTheTeam() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        linkedin: '',
        resume: null,
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.resume) return;

        setError('');
        setSubmitting(true);

        const readFile = () =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result.split(',')[1]);
                reader.onerror = () => reject(reader.error);
                reader.readAsDataURL(formData.resume);
            });

        try {
            const base64File = await readFile();
            const data = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                role: formData.role,
                linkedin: formData.linkedin,
                fileName: formData.resume.name,
                fileData: base64File,
            };

            await fetch('https://script.google.com/macros/s/AKfycbz93kCZSzxMEXcAR-1OL8cePEAD_M0WHO-I38UjV9oWtw0zCLiGCtN0-RVkBUPrCPC0Eg/exec', {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(data),
            });
            setSubmitted(true);
        } catch (err) {
            console.error('Upload failed', err);
            setError('Upload failed. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="mx-auto grid max-w-7xl gap-12 px-8 py-24 lg:grid-cols-[0.95fr_1.05fr]">
            <section>
                <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-[#ffb4a4]">Join the Team</p>
                <h1 className="mt-5 font-display text-6xl font-bold leading-tight md:text-7xl">Build decision execution systems with us.</h1>
                <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#dfbfb9]">
                    Share your details and resume. Your submission will be sent to info@deciops.ai for review.
                </p>
            </section>
            <section className="bg-white p-8 text-[#1a1c1b] shadow-xl md:p-10">
                {submitted ? (
                    <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#a5351e] to-[#c74d34] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h2 className="font-display text-3xl font-bold">Thank you for reaching out.</h2>
                        <p className="mt-4 max-w-sm text-base leading-relaxed text-stone-600">
                            Your application is in. The team at DeciOps will review your resume and get back to you at <span className="font-semibold">{formData.email}</span>.
                        </p>
                    </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <label className="block">
                            <span className="text-sm font-bold text-stone-700">First name</span>
                            <input
                                name="firstName"
                                required
                                minLength="2"
                                className="mt-2 w-full border border-stone-300 px-4 py-3 outline-none focus:border-[#c74d34]"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="block">
                            <span className="text-sm font-bold text-stone-700">Last name</span>
                            <input
                                name="lastName"
                                required
                                minLength="2"
                                className="mt-2 w-full border border-stone-300 px-4 py-3 outline-none focus:border-[#c74d34]"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <label className="block">
                        <span className="text-sm font-bold text-stone-700">Email</span>
                        <input
                            name="email"
                            required
                            className="mt-2 w-full border border-stone-300 px-4 py-3 outline-none focus:border-[#c74d34]"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-bold text-stone-700">Role interested in</span>
                        <input
                            name="role"
                            required
                            minLength="2"
                            className="mt-2 w-full border border-stone-300 px-4 py-3 outline-none focus:border-[#c74d34]"
                            type="text"
                            value={formData.role}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-bold text-stone-700">LinkedIn / Portfolio</span>
                        <input
                            name="linkedin"
                            className="mt-2 w-full border border-stone-300 px-4 py-3 outline-none focus:border-[#c74d34]"
                            type="url"
                            value={formData.linkedin}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-bold text-stone-700">Upload resume</span>
                        <input
                            name="resume"
                            required
                            accept=".pdf,.doc,.docx"
                            className="mt-2 w-full border border-stone-300 px-4 py-3 outline-none focus:border-[#c74d34]"
                            type="file"
                            onChange={handleChange}
                        />
                    </label>
                    {error && (
                        <p className="text-sm font-semibold text-[#c74d34]">{error}</p>
                    )}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[#a5351e] to-[#c74d34] px-6 py-4 text-base font-extrabold uppercase tracking-wide text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {submitting ? (
                            <>
                                <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                </svg>
                                Sending…
                            </>
                        ) : (
                            'Send Resume'
                        )}
                    </button>
                </form>
                )}
            </section>
        </main>
    );
}