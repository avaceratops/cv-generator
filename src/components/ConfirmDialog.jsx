import * as AlertDialog from '@radix-ui/react-alert-dialog';
import '../styles/ConfirmDialog.scss';

export default function ConfirmDialog({
  triggerIcon,
  triggerClass,
  triggerText,
  title = 'Are you sure?',
  desc = 'This action cannot be undone.',
  actionOnClick,
}) {
  // accept both 'fa-icon-name' and 'icon-name'
  if (triggerIcon && !triggerIcon.startsWith('fa-')) {
    triggerIcon = `fa-${triggerIcon}`;
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className={triggerClass}>
          {triggerIcon && <i className={`fa-solid ${triggerIcon}`} aria-hidden="true"></i>}
          <span className={triggerIcon ? 'fa-sr-only' : ''}>{triggerText}</span>
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="dialog-overlay" />
        <AlertDialog.Content className="dialog">
          <AlertDialog.Title className="dialog__title">{title}</AlertDialog.Title>
          <AlertDialog.Description className="dialog__desc">{desc}</AlertDialog.Description>
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
