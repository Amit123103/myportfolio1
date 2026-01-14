import liveStockImg from '../assets/projects/live_stock.png';
import aiAgentImg from '../assets/projects/ai_agent.png';
import gazetteImg from '../assets/projects/gazette.png';
import ticketSystemImg from '../assets/projects/ticket_system.png';

export const projectsData = [
    {
        id: 1,
        title: 'Live Stock',
        category: 'Machine Learning',
        image: liveStockImg,
        tech: ['Python', 'TensorFlow', 'Scikit-Learn'],
        github: 'https://github.com/Amit123103/livestock',
        demo: 'https://amit123103.github.io/livestock/'
    },
    {
        id: 2,
        title: 'AI Agent Portfolio',
        category: 'Web Development',
        image: aiAgentImg,
        tech: ['React', 'Framer Motion', 'Tailwind'],
        github: 'https://github.com/Amit123103/AI-Agent',
        demo: 'https://amit123103.github.io/AI-Agent/'
    },
    {
        id: 3,
        title: 'Gazette Dashboard',
        category: 'Data Science',
        image: gazetteImg,
        tech: ['Tableau', 'SQL', 'Python'],
        github: 'https://github.com/Amit123103/Gazette',
        demo: 'https://amit123103.github.io/Gazette/'
    },
    {
        id: 4,
        title: 'Ticket System',
        category: 'Fullstack',
        image: ticketSystemImg,
        tech: ['Node.js', 'PostgreSQL', 'React'],
        github: 'https://github.com/Amit123103/ticket-management-system',
        demo: '#'
    },
];
