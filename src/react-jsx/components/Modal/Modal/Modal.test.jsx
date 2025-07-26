// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Modal, { MODAL_SIZES, FULL_SCREEN_SIZES } from './Modal';

// describe('Modal', () => {
//   it('renders with default classes and children', () => {
//     render(
//       <Modal wrapperProps={{ 'data-testid': 'modal-wrapper' }}>
//         <div>Modal Content</div>
//       </Modal>
//     );
//     const wrapper = screen.getByTestId('modal-wrapper');
//     expect(wrapper).toBeInTheDocument();
//     expect(wrapper).toHaveClass(`${PREFIX}modal`);
//     expect(wrapper).not.toHaveClass(`${PREFIX}d-block`);
//     expect(wrapper).not.toHaveClass(`${PREFIX}show`);
//     expect(wrapper).not.toHaveClass(`${PREFIX}fade`);

//     const dialog = wrapper.querySelector(`.${PREFIX}modal-dialog`);
//     expect(dialog).toBeInTheDocument();
//     expect(dialog).not.toHaveClass(`${PREFIX}modal-dialog-scrollable`);
//     expect(dialog).not.toHaveClass(`${PREFIX}modal-dialog-centered`);
//     expect(dialog).not.toHaveClass(`${PREFIX}modal-lg`);
//     expect(dialog).not.toHaveClass(`${PREFIX}modal-fullscreen`);

//     const content = dialog.querySelector(`.${PREFIX}modal-content`);
//     expect(content).toBeInTheDocument();
//     expect(content).toHaveTextContent('Modal Content');
//   });

//   it('applies fade, scrollable, centered, size, and fullScreenSize classes', () => {
//     render(
//       <Modal
//         show
//         isFade
//         isScrollable
//         isCentered
//         size="lg"
//         fullScreenSize="md"
//         wrapperProps={{ 'data-testid': 'modal-wrapper', className: 'custom-modal' }}
//         dialogProps={{ id: 'modal-dialog-id', className: 'custom-dialog' }}
//         contentProps={{ id: 'modal-content-id', className: 'custom-content' }}
//       >
//         <div>Modal Content</div>
//       </Modal>
//     );

//     const wrapper = screen.getByTestId('modal-wrapper');
//     expect(wrapper).toHaveClass(`${PREFIX}modal`);
//     expect(wrapper).toHaveClass(`${PREFIX}d-block`);
//     expect(wrapper).toHaveClass(`${PREFIX}show`);
//     expect(wrapper).toHaveClass(`${PREFIX}fade`);
//     expect(wrapper).toHaveClass('custom-modal');

//     const dialog = wrapper.querySelector(`.${PREFIX}modal-dialog`);
//     expect(dialog).toHaveClass(`${PREFIX}modal-dialog-scrollable`);
//     expect(dialog).toHaveClass(`${PREFIX}modal-dialog-centered`);
//     expect(dialog).toHaveClass(`${PREFIX}modal-lg`);
//     expect(dialog).toHaveClass(`${PREFIX}modal-fullscreen-md-down`);
//     expect(dialog).toHaveClass('custom-dialog');
//     expect(dialog).toHaveAttribute('id', 'modal-dialog-id');

//     const content = dialog.querySelector(`.${PREFIX}modal-content`);
//     expect(content).toHaveClass('custom-content');
//     expect(content).toHaveAttribute('id', 'modal-content-id');
//   });

//   it('does not prefix class when useBsClasses is false on all wrappers', () => {
//     render(
//       <Modal
//         show
//         isFade
//         isScrollable
//         isCentered
//         size="sm"
//         fullScreenSize="all"
//         wrapperProps={{ 'data-testid': 'modal-wrapper', useBsClasses: false }}
//         dialogProps={{ 'data-testid': 'modal-dialog', useBsClasses: false }}
//         contentProps={{ 'data-testid': 'modal-content', useBsClasses: false }}
//       >
//         <div>Modal Content</div>
//       </Modal>
//     );
//     const wrapper = screen.getByTestId('modal-wrapper');
//     expect(wrapper).not.toHaveClass('modal');
//     expect(wrapper).not.toHaveClass(`${PREFIX}modal`);
//     expect(wrapper).not.toHaveClass('d-block');
//     expect(wrapper).not.toHaveClass(`${PREFIX}d-block`);
//     expect(wrapper).not.toHaveClass('show');
//     expect(wrapper).not.toHaveClass(`${PREFIX}show`);

//     const dialog = screen.getByTestId('modal-dialog');
//     expect(dialog).not.toHaveClass('modal-dialog');
//     expect(dialog).not.toHaveClass(`${PREFIX}modal-dialog`);
//     expect(dialog).not.toHaveClass('modal-dialog-scrollable');
//     expect(dialog).not.toHaveClass(`${PREFIX}modal-dialog-scrollable`);
//     expect(dialog).not.toHaveClass('modal-dialog-centered');
//     expect(dialog).not.toHaveClass(`${PREFIX}modal-dialog-centered`);
//     expect(dialog).not.toHaveClass('modal-sm');
//     expect(dialog).not.toHaveClass(`${PREFIX}modal-sm`);
//     expect(dialog).not.toHaveClass('modal-fullscreen');
//     expect(dialog).not.toHaveClass(`${PREFIX}modal-fullscreen`);

//     const content = screen.getByTestId('modal-content');
//     expect(content).not.toHaveClass('modal-content');
//     expect(content).not.toHaveClass(`${PREFIX}modal-content`);
//   });

//   it('applies all modal sizes from MODAL_SIZES', () => {
//     Object.entries(MODAL_SIZES).forEach(([sizeKey, sizeClass]) => {
//       if (!sizeKey) return;
//       render(
//         <Modal show size={sizeKey} wrapperProps={{ 'data-testid': `modal-wrapper-${sizeKey}` }}>
//           <div>Modal Content</div>
//         </Modal>
//       );
//       const wrapper = screen.getByTestId(`modal-wrapper-${sizeKey}`);
//       const dialog = wrapper.querySelector(`.${PREFIX}modal-dialog`);
//       expect(dialog).toHaveClass(`${PREFIX}${sizeClass}`);
//     });
//   });

//   it('applies all fullscreen sizes from FULL_SCREEN_SIZES', () => {
//     Object.entries(FULL_SCREEN_SIZES).forEach(([fsKey, fsClass]) => {
//       if (!fsKey) return;
//       render(
//         <Modal
//           show
//           fullScreenSize={fsKey}
//           wrapperProps={{ 'data-testid': `modal-wrapper-fs-${fsKey}` }}
//         >
//           <div>Modal Content</div>
//         </Modal>
//       );
//       const wrapper = screen.getByTestId(`modal-wrapper-fs-${fsKey}`);
//       const dialog = wrapper.querySelector(`.${PREFIX}modal-dialog`);
//       expect(dialog).toHaveClass(`${PREFIX}${fsClass}`);
//     });
//   });
// });
