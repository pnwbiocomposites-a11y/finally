import { Toast } from '@/src/hooks/useToast';

interface ToastContainerProps {
  toasts: Toast[];
  onDismiss: (id: number) => void;
}

export const ToastContainer = ({ toasts, onDismiss }: ToastContainerProps) => {
  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="alert"
          onClick={() => onDismiss(toast.id)}
          className={`pointer-events-auto animate-slide-in cursor-pointer rounded border px-4 py-3 text-sm font-medium shadow-lg backdrop-blur ${
            toast.type === 'error'
              ? 'border-red-500/40 bg-red-950/80 text-red-200'
              : 'border-green-500/40 bg-green-950/80 text-green-200'
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};
