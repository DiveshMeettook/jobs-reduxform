import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const offersList = [
  {
    _id: "615ec11fa1928aeceea24699",
    poste: "Team Leader Data - Paris",
    entreprise: "Nonstop Consulting",
    place: "Paris",
    tags: "Informatique,python,santé",
    description:
      "Dans le cadre de la croissance de cette entreprise, nouvel acteur de l'industrie Lifescience, le Team Leader Data jouera un rôle central en tant que senior manager pour travailler en étroite collaboration avec les co-fondateurs sur la structuration de l'équipe Data, en fournissant une solide expertise technique, en dirigeant et en développant l'équipe dans le développement essentiel à venir. Poste en CDI en direct dans l'entreprise. Objectifs et missions En tant que chef d'équipe Data, vous serez responsable de l'amélioration et de la maintenance continue de nos pipelines de données et de nos applications, en écrivant de nouveaux pipelines pour capturer de nouvelles données et en déployant des modèles créés par nos scientifiques des données et nos ingénieurs en apprentissage automatique, garantissant ainsi un processus de mise en œuvre fluide. Vous élaborerez également une feuille de route complète pour les données, bien articulée avec les objectifs et les projets de l'entreprise, et gérerez sa mise en œuvre.",
    mission:
      "Définir et mettre en œuvre des outils et une méthodologie appropriés (par exemple, lean, agile) à mesure que l'équipe et le volume de projets augmenteront Favoriser l'étroite collaboration au sein de l'équipe - incl. la mise en place de processus ou de méthodes de travail pour assurer le passage en douceur des projets de recherche au mode de production 2. La gestion de la feuille de route Data et des projets à travers les équipes - comprenant : Feuilles de route opérationnelles Cratfing Data alignées sur les objectifs de l'entreprise et les projets cliniques Pilotage de leur exécution en fonction des objectifs et des échéanciers Préparer des mises à jour régulières pour soutenir les décisions, anticiper les risques ou les défis à surmonter et proposer des solutions ou des plans de dépannage 3. Le pilotage des activités d'ingénierie des données, en fournissant des conseils et une expertise technique - les domaines d'expertise clés initiaux devraient inclure : Solutions cloud (AWS) Sécurité Infrastructure informatique Ingestion et stockage de données Conteneurisation Pipelines de données, architecture Datawarehouse/Datalake et systèmes de reporting 4. L'exécution de certaines tâches d'ingénierie des données (au moins dans la configuration initiale) - pourrait inclure un rôle généralement actif dans la conception, le codage et le test des solutions.",
    profile:
      "Ingénieur de données (data engineer) ou un architecte de données (data architect) avec plus de 5 ans d'expérience professionnelle à temps plein, y compris une expérience passée dans l'encadrement de scientifiques des données et/ou la gestion d'une équipe. L'envie de travailler au sein d'équipes techniques multidisciplinaires riches où l'intégration d'intervenants variés est un facteur clé de succès - scientifiques des données (y compris les ingénieurs de données, les développeurs, les analystes de données, le cloud computing, les spécialistes de l'IA), les biologistes et les cliniciens Connaissance, expérience et/ou intérêt marqué pour les sciences de la vie et l'environnement des données de santé Un Master 2 ou équivalent avec mention scientifique Anglais courant Compétences techniques obligatoires",
    howToApply:
      "Si ce poste vous intéresse et que vous correspondez au profil, vous pouvez envoyer votre CV à Antoine Jerrard - [email protected]",
  },
  {
    _id: "615ec26ea1928aeceea2469c",
    poste: "Research Intern",
    entreprise: "Criteo",
    place: "Lyon",
    tags: "stage,rust,arts",
    description:
      "At Criteo, our culture is as unique as it is diverse. With offices around the world, our incredible team of 2,600 Criteos collaborates to create an open & inclusive environment. We work together to achieve our goals, push boundaries, and be impactful. All of this supports us in our mission to power the world’s marketers with trusted & impactful advertising. The Criteo AI Lab is pioneering innovations in computational advertising. As the center of scientific excellence in the company, we deliver both fundamental and applied scientific leadership through published research, product innovations and new technologies powering the company’s products. The Criteo AI Lab operates within the spectrum of two main roles: Applied Research: Our Scientists fully-leverage the advantage of working in a machine-learning driven organization by partnering closely with our product and engineering counter-parts to deliver cutting-edge solutions to the challenges in online advertising. Academic Contributions: The Research Scientis s at Criteo are encouraged and fully-supported to publish their works at international conferences, collaborate with academic partners, file for patents, release datasets and help establish the state-of-art in computational advertising.",
    mission:
      "Understand and shape the product direction by contributing innovative ideas, specifically as a result of data mining and experimental data modeling Identify new research opportunities at Criteo and lead the exploration of these ideas and pursue patents/publications where appropriate. Interact with other teams to define interfaces and understand and resolve dependencies Maintain world-class academic credentials through publications, presentations, external collaborations and service to the research community. Develop high-performance algorithms, test and implement the algorithms in scalable and product-ready code.",
    profile:
      "Master Degree/PhD in Machine Learning or a related field. Strong hands-on skills in sourcing, cleaning, manipulating and analyzing large volumes of data. Experience in conducting and reporting results of original and collaborative research with publications. Prior experience in online advertising is a plus.",
    howToApply: "click on apply!",
  },
  {
    _id: "615ec34ca1928aeceea2469e",
    poste: "Solution Architect",
    entreprise: "Nvidia",
    place: "Nanterre",
    tags: "communication,c++, big data",
    description:
      "NVIDIA’s Worldwide Field Operations (WWFO) team is looking for a Data Science focused Solution Architect with expertise in Machine Learning (ML), Deep Learning (DL) and Data Science platforms. In our Solutions Architecture team, we work with the most exciting computing hardware and software, driving the latest breakthroughs in Analytics and artificial intelligence. We need individuals who can enable customer productivity and develop lasting relationships with our technology partners, making NVIDIA an integral part of end-user solutions. We are looking for someone always thinking about artificial intelligence, someone who can maintain synergy in a fast paced, rapidly evolving field, someone able to coordinate efforts between corporate marketing, industry business development and engineering.",
    mission:
      "Develop and demonstrate solutions based on NVIDIA’s state-of-the-art ML/DL, data science software and hardware technologies to customers, Perform in-depth analysis and optimization to ensure the best performance on GPU architecture systems, Work directly with key customers to understand their technology and provide the best solutions, Partner with Engineering, Product and Sales teams to develop, plan best suitable solutions for customers. Enable development and growth of product features through customer feedback and proof-of-concept evaluations, Build industry expertise and become a contributor in integrating NVIDIA technology into Enterprise Computing architectures.Work closely with customer's data science and IT teams",
    profile:
      "Development background with NVIDIA software libraries and GPUs, and CUDA optimization experience. Experience applying DL/ML in Finance, Consumer Internet Service Companies (CRISP) or Cloud Service Providers (CSP). Experience using DevOps technologies such as Docker, Kubernetes, Singularity, etc.",
    howToApply: "Send your application to dumdatdatatataa@gmail.com!",
  },
  {
    _id: "615ec424a1928aeceea246a0",
    poste: "Stage Développeur Full Stack ",
    entreprise: "Havana it & Apps",
    place: "Marseille",
    tags: "informatique,stage, big data",
    description:
      "Havana IT & Apps : une ESN fondée en 2011 qui s’appuie sur des valeurs simples, d’initiative, de performance et de plaisir au travail ! Havana aujourd’hui ? Entreprise à taille humaine, 150 collaborateurs évoluant au sein d’environnements riches et innovants pour transformer le quotidien de nos clients situés dans les quatre coins de la France (Paris, Lyon, Grenoble…). Havana, incubatrice de talents et d’idées, accompagne ses clients dans la transformation de leur SI. En 2019, nous investissons sur la donnée et la data science avec l’acquisition de Data2I apportant son expertise sur l’analyse prédictive.",
    mission:
      "Réalisation de logiciel pour nos clients dans le domaine de l’industrie : En front end : Visualisation de données. Modélisation en 3D. Interface homme machines. En back end Gestion de grandes quantités de données. Qualification, nettoyage, consolidation automatique des données.",
    profile:
      "Maîtrise d’un ou plusieurs langages de programmation Javascript, Python, C++, Java. A l’aise avec Linux, anglais technique. Bonne connaissance générale des bases de données SQL et NoSQL. Curiosité, communication, appétences pour l’ingénierie des données, capacités à comprendre les diverses problématiques métiers et en particulier dans l’industrie.",
    howToApply: "Send your application to dumdatdatatataa@gmail.com!",
  },
];

const offersReducer = (state = offersList, action) => {
  switch (action.type) {
    case "FETCH_OFFERS":
      return state;
    case "ADD_OFFER":
      console.log("this is object in reducer", action.payload);
      console.log("this is state in reducer", state);
      console.log("this is final", [
        ...state,
        { ...action.payload, _id: Math.random() },
      ]);

      return [...state, { ...action.payload, _id: Math.random() }];
    default:
      return state;
  }
};

export default combineReducers({
  offers: offersReducer,
  form: formReducer,
});
