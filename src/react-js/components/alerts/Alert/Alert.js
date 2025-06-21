import React from 'react';
import PropTypes from 'prop-types';
import { ALERT_CLASSES } from '../constants';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { addPrefixToBsClasses } from '../../../utilities/utilities';
import { CloseButton } from '../../buttons/Buttons';

export default function Alert({
  children,
  variant = '',
  className = '',
  useBsClasses = true,
  isToggleable,
  show,
  showCloseButton,
  closeButtonLabel,
  onClose = () => {},
  ...props
}) {
  const prefix = usePrestylerPrefix();
  const bsClasses = ['alert'];
  if (variant) {
    bsClasses.push(ALERT_CLASSES[variant]);
  }

  const prefixedBsClasses = addPrefixToBsClasses(bsClasses, prefix, useBsClasses);
  const fullClassName = `${prefixedBsClasses} ${className}`.trim();
  const fadeClass = `${prefix}alert-dismissible ${prefix}fade`;
  const showClass = show ? `${prefix}show` : '';
  const fullToggleableClassName = isToggleable
    ? `${fullClassName} ${fadeClass} ${showClass}`
    : fullClassName;
  return (
    <div role="alert" {...props} className={fullToggleableClassName}>
      {isToggleable && showCloseButton && (
        <CloseButton aria-label={closeButtonLabel || undefined} onClick={onClose} />
      )}
      {children}
    </div>
  );
}

Alert.propTypes = {
  variant: PropTypes.oneOf(['', ...Object.keys(ALERT_CLASSES)]),
  children: PropTypes.node,
  className: PropTypes.string,
  useBsClasses: PropTypes.bool,
  isToggleable: PropTypes.bool,
  show: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onClose: PropTypes.func,
};
