import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={458}
    viewBox="0 0 280 458"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="120" cy="120" r="120" />
    <rect x="0" y="261" rx="5" ry="5" width="245" height="24" />
    <rect x="0" y="299" rx="5" ry="5" width="245" height="66" />
    <rect x="5" y="383" rx="6" ry="6" width="114" height="34" />
    <rect x="134" y="381" rx="6" ry="6" width="112" height="41" />
  </ContentLoader>
);

export default Skeleton;
