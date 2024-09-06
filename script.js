const app = Vue.createApp({
    data() {
        return {
            email: 'flk@example.com',
            phone: '+649934223423',
            linkedin: 'https://www.linkedin.com/in/frienchocampo',
            github: 'https://github.com/frienchocampo',
            experience: [
                {
                    title: 'IT Website Developer',
                    company: 'TechCorp Inc.',
                    startDate: 'June 2022',
                    endDate: 'Present',
                    description: 'Developed and maintained web applications using modern technologies.'
                },
                {
                    title: 'Intern Developer',
                    company: 'WebSolutions Ltd.',
                    startDate: 'January 2021',
                    endDate: 'May 2022',
                    description: 'Assisted in the development of internal tools and features.'
                }
            ],
            education: [
                {
                    degree: 'Bachelor of Science',
                    field: 'Computer Science',
                    institution: 'University of Example',
                    year: '2020'
                }
            ],
            skills: [
                'JavaScript',
                'Vue.js',
                'HTML/CSS',
                'Node.js'
            ]
        };
    },
    methods: {
        editProfile() {
            alert('Edit profile feature is under development.');
        }
    }
});

app.mount('#app');
