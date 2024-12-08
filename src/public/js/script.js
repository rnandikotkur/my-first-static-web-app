
const content = {
    home: `<h1>Welcome to Ralos Consulting</h1><p>Your Trusted Partner for Cloud Platforms and Cybersecurity.</p>`,
    azure: {
        'well-architected-framework': `<h1>Azure Well-Architected Framework</h1><p>Build secure, high-performing workloads on Azure.</p>`,
        'hybrid-cloud-platform': `<h1>Azure Hybrid Cloud Platform</h1><p>Seamlessly integrate on-premises and Azure environments.</p>`,
        'landing-zones': `<h1>Azure Landing Zones</h1><p>Preconfigured solutions for secure Azure adoption.</p>`,
        'open-ai': `<h1>Azure Open AI</h1><p>Leverage AI for transformative business outcomes.</p>`,
        'machine-learning': `<h1>Azure Machine Learning</h1><p>Build, train, and deploy machine learning models.</p>`,
        'databricks': `<h1>Azure Databricks</h1><p>Accelerate big data and AI analytics on Azure.</p>`,
        'kubernetes-architecture': `<h1>Azure Kubernetes Architecture</h1><p>Scalable and secure Kubernetes clusters.</p>`,
        'api-management': `<h1>Azure API Management</h1><p>Securely manage APIs with Azure.</p>`,
        'virtual-desktop': `<h1>Azure Virtual Desktop</h1><p>Enable remote desktop solutions on Azure.</p>`,
        'cloud-data-platform': `<h1>Azure Cloud Data Platform</h1><p>Maximize data-driven decision making.</p>`,
        'security-baseline': `<h1>Azure Security Baseline</h1><p>Secure your workloads effectively.</p>`,
        'compute-storage-networking': `<h1>Azure Compute, Storage, Networking</h1><p>Optimize your infrastructure with Azure's services.</p>`
    },
    'google-cloud': {
        'well-architected-framework': `<h1>GCP Well-Architected Framework</h1><p>Design secure and efficient systems on Google Cloud.</p>`,
        'hybrid-cloud-platform': `<h1>GCP Hybrid Cloud Platform</h1><p>Seamlessly connect your data and workloads.</p>`,
        'landing-zones': `<h1>GCP Landing Zones</h1><p>Streamline cloud adoption with Google Cloud.</p>`,
        'brain-ai': `<h1>Google Brain AI</h1><p>Advanced AI innovations for smarter systems.</p>`,
        'machine-learning': `<h1>GCP Machine Learning</h1><p>Train and deploy cutting-edge ML models.</p>`,
        'cloud-data-platform': `<h1>GCP Cloud Data Platform</h1><p>Empower analytics and storage solutions.</p>`,
        'kubernetes-architecture': `<h1>GCP Kubernetes Architecture</h1><p>Deploy and scale workloads with Kubernetes.</p>`,
        'api-management': `<h1>GCP API Management</h1><p>Optimize and manage APIs effectively.</p>`,
        'virtual-desktop': `<h1>GCP Virtual Desktop</h1><p>Enable remote work with security.</p>`,
        'security-baseline': `<h1>GCP Security Baseline</h1><p>Protect workloads with Google’s best practices.</p>`,
        'compute-storage-networking': `<h1>GCP Compute, Storage, Networking</h1><p>Maximize performance and reliability.</p>`
    },
    aws: {
        'well-architected-framework': `<h1>AWS Well-Architected Framework</h1><p>Optimize workloads on AWS with best practices.</p>`,
        'hybrid-cloud-platform': `<h1>AWS Hybrid Cloud Platform</h1><p>Integrate your on-premises and cloud workloads.</p>`,
        'landing-zones': `<h1>AWS Landing Zones</h1><p>Simplify cloud adoption with prebuilt environments.</p>`,
        'open-ai': `<h1>AWS Open AI</h1><p>Explore AI-powered solutions with AWS.</p>`,
        'machine-learning': `<h1>AWS Machine Learning</h1><p>Train, build, and deploy models efficiently.</p>`,
        'databricks': `<h1>AWS Databricks</h1><p>Collaborative analytics and AI solutions.</p>`,
        'kubernetes-architecture': `<h1>AWS Kubernetes Architecture</h1><p>Manage containerized workloads seamlessly.</p>`,
        'api-management': `<h1>AWS API Management</h1><p>Optimize and secure your APIs.</p>`,
        'virtual-desktop': `<h1>AWS Virtual Desktop</h1><p>Deliver secure remote desktop experiences.</p>`,
        'cloud-data-platform': `<h1>AWS Cloud Data Platform</h1><p>Unlock data insights for better outcomes.</p>`,
        'security-baseline': `<h1>AWS Security Baseline</h1><p>Adopt robust security measures.</p>`,
        'compute-storage-networking': `<h1>AWS Compute, Storage, Networking</h1><p>Achieve scalability and reliability.</p>`
    }
};

function navigateTo(section, page = null) {
    const mainContent = document.getElementById('main-content');
    if (page && content[section] && content[section][page]) {
        mainContent.innerHTML = content[section][page];
    } else if (content[section]) {
        mainContent.innerHTML = content[section];
    } else {
        mainContent.innerHTML = `<h1>404</h1><p>Content not found.</p>`;
    }
}
navigateTo('home'); // Default content for the homepage
