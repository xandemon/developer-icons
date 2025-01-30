import moment from "moment";
import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { publicBaseUrl } from "@/config";
import type { URL } from "url";

export const DisclaimerAlert = ({ url }: { url: URL }) => {
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);

  const onDisclaimerUnderstand = () => {
    localStorage.setItem("disclaimerAcceptedOn", moment().toISOString());
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const isIconsPage = url.pathname.startsWith(`${publicBaseUrl}/icons/`);
    const disclaimerAcceptedOn = localStorage.getItem("disclaimerAcceptedOn");
    if (isIconsPage && !disclaimerAcceptedOn) {
      timeout = setTimeout(() => {
        setShowDisclaimer(true);
      }, 8000);
    }
    return () => !!timeout && clearTimeout(timeout);
  }, [url.pathname]);

  return (
    <AlertDialog
      open={showDisclaimer}
      onOpenChange={() => setShowDisclaimer((prev) => !prev)}
    >
      <AlertDialogTrigger className="hidden lg:block px-4 py-2 text-sm font-medium text-zinc-900 dark:text-white bg-zinc-300/50 dark:bg-zinc-800/50 hover:bg-zinc-300/100 dark:hover:bg-zinc-800/10 rounded-lg transition-colors">
        Disclaimer
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800">
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <span className="flex items-center gap-2 text-xl font-semibold text-amber-600 dark:text-amber-400">
              <AlertTriangle className="h-5 w-5" />
              <h2>Disclaimer</h2>
            </span>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
          <p>
            All trademarks, logos, and brand identities displayed here remain
            the intellectual property of their respective owners. The icons
            provided in this collection are made available under open-source
            terms and no copyright infringement is intended.
          </p>
          <p>
            While we strive to properly attribute all icons to their original
            sources, we acknowledge that each icon is subject to its owner's
            intellectual property rights and usage terms. Users must:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Obtain explicit permission from the respective trademark owners
              before any commercial use
            </li>
            <li>
              Adhere to each brand's official guidelines and usage policies
            </li>
            <li>
              Not redistribute, sell, or claim ownership of any icons in this
              collection
            </li>
          </ul>
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              For trademark owners: If you wish to have your intellectual
              property removed from this collection, please submit a request
              through our{" "}
              <a
                href="https://github.com/xandemon/developer-icons/issues"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                GitHub repository's issue tracker
              </a>
              .
            </p>
          </div>
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <Button
              className="bg-sky-500 text-zinc-100 hover:bg-sky-500/90"
              onClick={onDisclaimerUnderstand}
            >
              I Understand
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
