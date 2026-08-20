import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const TOTAL_SECONDS = 15 * 60;

export function CountdownOffer() {
  const [remaining, setRemaining] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining((value) => (value > 0 ? value - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");
  const expired = remaining === 0;

  return (
    <div className="mx-auto max-w-md text-center">
      <p className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
        <Clock className="size-4 text-primary" />
        {expired ? "Tempo do contador encerrado" : "Oferta especial disponível por tempo limitado"}
      </p>

      {expired ? (
        <div className="mt-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-soft">
          <p className="font-display text-lg font-semibold text-foreground">
            Esta contagem expirou
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Atualize a página para verificar se a condição promocional segue disponível.
          </p>
        </div>
      ) : (
        <div
          className="mt-3 inline-flex items-baseline gap-2 rounded-2xl bg-brand-deep px-8 py-4 shadow-card"
          role="timer"
          aria-live="off"
        >
          <span className="font-display text-4xl font-bold tabular-nums text-primary-foreground sm:text-5xl">
            {minutes}:{seconds}
          </span>
        </div>
      )}
    </div>
  );
}
