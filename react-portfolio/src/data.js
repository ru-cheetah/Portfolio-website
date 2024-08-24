export const config = {
  portfolio: {
    portfolioLogo: 'Portfolio',
    projectCard: {
      cards: [
        {
          heading: 'Personalised ChatBot',
          description:
            'The Personalised ChatBot is a Streamlit-based web app that uses the Retrieval-Augmented Generation (RAG) framework and Googles Gemini-PRO to provide accurate, contextually relevant answers from uploaded PDFs. It allows users to interactively upload documents and receive detailed responses to their queries',
          animationDelay: '300',
          buttonLink: 'https://github.com/ru-cheetah/Personalised-ChatBot',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'Walmart Sales Analysis',
          description:
            'The Comprehensive Sales Analysis Dashboard is a Streamlit-based tool that offers interactive filtering and visualization of sales data across various dimensions. Users can analyze sales trends, profit, and order priority with features like customizable date ranges and detailed charts.',
          animationDelay: '500',
          buttonLink: 'https://github.com/ru-cheetah/Data-Visualization-using-Streamlit',
          buttonText: 'CHECK OUT',
        },
        {
          heading: 'MindMate - The Ultimate Summarizer',
          description: 'MindMate is a machine learning web app for summarizing PDFs, videos, websites, and text, providing concise and accurate insights. It features a user-friendly interface and supports various content types for enhanced productivity.',
          animationDelay: '700',
          buttonLink: 'https://github.com/ru-cheetah/Summarizer',
          buttonText: 'CHECK OUT',
        }
      ],
    },
    internships: {
      internship: [
        {
          companyName: 'Providence India',
          role: 'Summer Internship',
          introText: 'During my internship at Providence India from June to August 2024, I led a project focused on Generative AI. Specifically, I built a Retrieval-Augmented Generation (RAG) model and developed an API to access it. Additionally, I created a Chromium browser extension and a webpage interface to facilitate seamless interaction with the API. This project involved collaboration with cross-functional teams to deliver a well-rounded and robust solution.',
          duration: 'June - August 2024'
        },
        {
          companyName: 'ACIC Idea Labs',
          role: 'Industrial Internship',
          introText: 'At ACIC Idea Labs, from September to December 2023, I contributed to the development of "MindMate - Ultimate Summarizer," a machine learning web application designed to summarize various types of content, including PDFs, videos, websites, and plain text. I was also involved in business discussions regarding marketing, sales, and finance to ensure the product’s commercial viability.',
          duration: 'September - December 2023'
        },
        {
          companyName: 'VaultofCode',
          role: 'Remote Internship',
          introText: 'During my remote internship with VaultofCode from October to November 2023, I designed and developed an interactive web page using React. This role involved showcasing technical proficiency and user-centric design while managing the project independently from inception to deployment.',
          duration: 'October - November 2023'
        },
      ],
    },
  },
};

export default config;
