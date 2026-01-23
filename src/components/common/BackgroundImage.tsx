import styled from 'styled-components';

interface BackgroundImageProps {
  image: string;
  size?: string;
  position?: string;
  repeat?: string;
  backgroundAttachment?: string;
  others?: string
}

const BackgroundImage = styled.div<BackgroundImageProps>`
  background-image: url(${props => props.image || '/logo.svg'});
  background-size: ${props => props.size || 'cover'};
  background-position: ${props => props.position || 'center'};
  background-repeat: ${props => props.repeat || 'no-repeat'};
  ${props => props.others}
`;

export default BackgroundImage;