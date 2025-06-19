import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bootstrap',
    description: (
      <>
        Build prefixed CSS files and use custom React components styled with Bootstrap. Import and compile custom SCSS/CSS helpers for extended styling capabilities.
      </>
    ),
  },
  {
    title: 'React & Handlebars',
    description: (
      <>
        Import and use easily customizable React components, Handlebars partials, decorators, and helpers designed for consistency and flexibility.
      </>
    ),
  },
  {
    title: 'JavaScript Utilities',
    description: (
      <>
        Configure and use custom JavaScript helpers and ready-to-use scripts to handle common UI behaviors and interactions.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
