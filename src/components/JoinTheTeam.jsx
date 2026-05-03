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

        const reader = new FileReader();
        reader.onload = async () => {
            const base64File = reader.result.split(',')[1]; // Remove data:application/pdf;base64,

            const data = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                role: formData.role,
                linkedin: formData.linkedin,
                fileName: formData.resume.name,
                fileData: base64File,
            };

            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbzyd92F50ge6heVT2jvz5ggv_mALpRutjo1LKUsSVPCRM37fvtbxyOQJ2_xNBoXbz7Ojg/exec', {
                    method: 'POST',
                    MODE: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                const result = await response.text();
                alert(result);
            } catch (error) {
                console.error('Upload failed', error);
                alert('Upload failed');
            }
        };
        reader.readAsDataURL(formData.resume);
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
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#a5351e] to-[#c74d34] px-6 py-4 text-base font-extrabold uppercase tracking-wide text-white hover:opacity-90"
                    >
                        Send Resume
                    </button>
                </form>
            </section>
        </main>
    );
}