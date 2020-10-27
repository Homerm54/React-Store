import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from 'styles/footer.module.css';

export default function Footer(){
  return(
  <footer className={`${style.container}`} role='button'>
    <FontAwesomeIcon icon='arrow-up' />&nbsp;&nbsp;&nbsp;&nbsp; Back to Top
  </footer>
  )
}