// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'fenli',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 4,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Minutes Barber App (2015 - 2016)',
          description: 'Minutes Barber connects you with your favorite barbershop. Now you don\'t have to wait hours just to get your haircut. Simply book your time and come to your barbershop the Minutes you need to be served.',
          imageUrl: 'https://media.licdn.com/dms/image/sync/v2/D5627AQHSVPib8Kb8QQ/articleshare-shrink_160/B56ZddS7H1G0As-/0/1749616931695?e=1791702000&v=beta&t=kkpv4Rgq3vnGyyrrJO6mdiGkX7vRik9BZkkX9UMtwio',
          link: 'https://play.google.com/store/apps/details?id=com.minutes.app',
        },
        {
          title: 'Tokopoket for Android (2015)',
          description: 'Tokopoket is a pocket-sized marketplace in form of a native app. It\'s an e-commerce mobile application which combined with social-media features like timeline, real-time chat, follow other member, etc.',
          imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFeVOSilvtYHw/profile-treasury-image-shrink_160_160/B56ZddVZtJHoAo-/0/1749617581851?e=1791702000&v=beta&t=BxFWrWWIPJSomKTE4UgoLROX7j8wM8GKdNbiUBS2JPQ',
          link: 'https://web.archive.org/web/20150623134656/https://play.google.com/store/apps/details?id=com.tokopoket.tokopoket',
        },
      ],
    },
  },
  seo: { title: 'Steven Lewi\'s Portfolio', description: '', imageURL: '' },
  social: {
    linkedin: 'stevenlewi',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'fenli',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://www.stevenlewi.id',
    phone: '(+62) 857 177 88 177',
    email: '',
  },
  resume: {
    fileUrl: 'https://link.stevenlewi.id/resume',
  },
  skills: [
    'Kotlin',
    'Swift',
    'Dart',
    'Android',
    'iOS',
    'Flutter',
    'Spring Framework',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'GitLab CI',
    'Github Actions',
    'Google Cloud',
    'Docker',
    'Kubernetes',
  ],
  experiences: [
    {
      company: 'Dkatalis',
      position: 'Staff Engineer | Fullstack',
      from: 'August 2026',
      to: 'Present',
      companyLink: 'https://www.dkatalis.com/',
    },
    {
      company: 'JULO',
      position: 'Principal Mobile Engineer',
      from: 'February 2023',
      to: 'January 2026',
      companyLink: 'https://www.julo.co.id/',
    },
  ],
  certifications: [
    {
      name: 'Kotlin Professional Certificate',
      body: 'JetBrains',
      year: 'July 2026',
      link: 'https://www.linkedin.com/learning/certificates/aa329d66d43124e5e0caa3910d2b22237c6c8cf071321750e661ef72923c384c',
    },
    {
      name: 'CKAD: Certified Kubernetes Application Developer',
      body: 'The Linux Foundation',
      year: 'November 2021',
      link: 'https://www.credly.com/badges/6d15013e-e9db-40c5-9cac-e235f8da713f',
    },
  ],
  educations: [
    {
      institution: 'Brawijaya University, Indonesia',
      degree: 'Bachelor\'s Degree',
      from: '2006',
      to: '2012',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'fenli', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'lofi',
      'night',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
  enablePWA: false,
};

export default CONFIG;
