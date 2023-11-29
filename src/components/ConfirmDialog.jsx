import * as AlertDialog from '@radix-ui/react-alert-dialog';
import '../styles/ConfirmDialog.scss';

export default function ConfirmDialog({ triggerClass, triggerText, title, desc, actionOnClick }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className={triggerClass}>{triggerText}</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="dialog-overlay" />
        <AlertDialog.Content className="dialog">
          <AlertDialog.Title className="dialog__title">
            {title || 'Are you sure?'}
          </AlertDialog.Title>
          <AlertDialog.Description className="dialog__desc">
            {desc || 'This action will erase all manually entered data, and cannot be reversed.'}
          </AlertDialog.Description>
          <div className="button-container">
            <AlertDialog.Cancel asChild>
              <button className="button button--cancel">Cancel</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button className="button button--save" onClick={actionOnClick}>
                OK
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
