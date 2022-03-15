
import { Container, ConteudoFilo } from '../modal/style'

interface Props {
  title: string,
};
const Modal: React.FC<Props> = ({title, children, ...rest}) => (
    <Container >
      <ConteudoFilo>
        <button>X</button>
        {children}
      </ConteudoFilo>
    </Container>
);
export default Modal;