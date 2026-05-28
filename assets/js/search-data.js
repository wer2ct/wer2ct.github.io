// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Co-author publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-ldmx-technical-design-report-up-on-arxiv-my-main-contributions-are-in-the-llps-analysis-section-as-well-some-of-the-beamline-and-trigger-stuff",
          title: 'LDMX Technical Design Report up on arXiv! My main contributions are in the...',
          description: "",
          section: "News",},{id: "news-presented-semantic-segmentation-of-neutrino-interactions-in-dune-s-tms-at-sesaps-2025-hosted-by-james-madison-university-i-was-awarded-best-undergraduate-oral-presentation",
          title: 'Presented “Semantic Segmentation of Neutrino Interactions in DUNE’s TMS” at SESAPS 2025 hosted...',
          description: "",
          section: "News",},{id: "news-paper-detailing-recent-beamline-commissioning-for-ldmx-on-arxiv-and-submitted-to-nim-a-i-worked-on-this-project-while-visiting-slac-in-2024",
          title: 'Paper detailing recent beamline commissioning for LDMX on arXiv and submitted to NIM-A....',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-nsf-graduate-research-fellowship",
          title: 'I was awarded the NSF Graduate Research Fellowship!',
          description: "",
          section: "News",},{id: "news-first-ldmx-llps-sensitivity-paper-on-arxiv-submitted-to-jhep-this-is-one-of-the-main-projects-i-worked-on-as-an-undergraduate-check-it-out",
          title: 'First LDMX LLPs sensitivity paper on arXiv, submitted to JHEP. This is one...',
          description: "",
          section: "News",},{id: "news-a-cool-ml-project-i-worked-on-towards-the-end-of-high-school-and-in-my-first-few-months-at-uva-was-published-in-aj-check-out-astronomical-image-time-series-segmentation-for-faint-fast-object-detection-a-huge-congrats-to-dan-and-the-team-for-making-this-one-a-reality",
          title: 'A cool ML project I worked on towards the end of high school...',
          description: "",
          section: "News",},{id: "news-i-officially-graduated-from-the-university-of-virginia-with-a-b-s-in-physics-highest-distinction-and-minor-in-philosophy-go-hoos-i-am-also-honored-to-have-received-the-stephen-thornton-award-in-physics-undergraduate-research-for-my-work-on-ldmx",
          title: 'I officially graduated from the University of Virginia with a B.S in Physics...',
          description: "",
          section: "News",},{id: "presentations-sesaps-2023-ldmx-the-light-dark-matter-experiment",
          title: 'SESAPS 2023: LDMX - The Light Dark Matter eXperiment',
          description: "My first conference presentation! Overview of early LDMX work including the ill-fated intermediate BDT",
          section: "Presentations",handler: () => {
              window.location.href = "/presentations/sesaps_23/";
            },},{id: "presentations-vas-2024-ldmx-the-light-dark-matter-experiment",
          title: 'VAS 2024: LDMX - The Light Dark Matter eXperiment',
          description: "Introduction to LDMX and the target-as-target LLPs search. This talk won best undergraduate presentation in the physics, astronomy, and math section!",
          section: "Presentations",handler: () => {
              window.location.href = "/presentations/vas_24/";
            },},{id: "presentations-sesaps-2024-hunting-for-dark-matter-with-ldmx",
          title: 'SESAPS 2024: Hunting for Dark Matter with LDMX',
          description: "Another LDMX talk, this time with improved LLP search results. This talk won best undergraduate oral presentation!",
          section: "Presentations",handler: () => {
              window.location.href = "/presentations/sesaps_24/";
            },},{id: "presentations-sigma-pi-sigma-symposium-2024-hunting-for-dark-matter-with-ldmx",
          title: 'Sigma Pi Sigma Symposium 2024: Hunting for Dark Matter with LDMX',
          description: "Survey of LDMX work for the Sigma Pi Sigma undergraduate research symposium. This talk won best oral presentation!",
          section: "Presentations",handler: () => {
              window.location.href = "/presentations/sps_24/";
            },},{id: "presentations-vas-2025-toward-a-voltage-tunable-laser-frequency-lock-using-rydberg-eit-spectroscopy-in-a-rubidium-cell",
          title: 'VAS 2025: Toward a Voltage Tunable Laser Frequency Lock Using Rydberg EIT Spectroscopy...',
          description: "Poster overview of my work with the ultrafast laser group",
          section: "Presentations",handler: () => {
              window.location.href = "/presentations/vas_25/";
            },},{id: "presentations-sesaps-2025-gnn-semantic-segmentation-of-neutrino-interactions-in-dune-s-tms",
          title: 'SESAPS 2025: GNN Semantic Segmentation of neutrino interactions in DUNE’s TMS',
          description: "Talk presenting results from my DUNE SULI work",
          section: "Presentations",handler: () => {
              window.location.href = "/presentations/sesaps_25/";
            },},{id: "presentations-new-channels-and-deep-learning-broadening-ldmx-39-s-dark-matter-search",
          title: 'New Channels and Deep Learning: Broadening LDMX&amp;#39;s Dark Matter Search',
          description: "Introduction to the ECal-as-Target LLPs search and GNN methods for background rejection.",
          section: "Presentations",handler: () => {
              window.location.href = "/presentations/vas_26/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
