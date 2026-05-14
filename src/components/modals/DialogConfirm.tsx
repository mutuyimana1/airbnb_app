import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { useRef } from "react"

interface DialogConfirmProps {
  openText: string;
  headerText?: string;
  onConfirm?: (reason?: string) => void | Promise<void>;
  isLoading?: boolean;
  showReasonField?: boolean;
  requireReason?: boolean;
}
export function DialogConfirm({
  openText,
  headerText,
  onConfirm,
  isLoading,
  showReasonField = true,
  requireReason = false,
}: DialogConfirmProps) {
  const reasonRef = useRef<HTMLInputElement>(null)

  const handleConfirm = async () => {
    if (requireReason) {
      const reason = reasonRef.current?.value || "";
      if (!reason.trim()) {
        return;
      }
      await onConfirm?.(reason);
    } else {
      await onConfirm?.();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{openText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-sm">{headerText ?? "This Action can't be undone"}</DialogTitle>
        </DialogHeader>
        {showReasonField && (
          <FieldGroup>
            <Field>
              <Label htmlFor="reason">Reason</Label>
              <Input id="reason" ref={reasonRef} name="reason" defaultValue="" placeholder="Enter reason" required={requireReason} />
            </Field>
          </FieldGroup>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="button">Cancel</Button>
          </DialogClose>
          <Button onClick={handleConfirm} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Send"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}