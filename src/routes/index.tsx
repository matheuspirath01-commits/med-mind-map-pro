import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  Compass,
  Download,
  FileText,
  GraduationCap,
  ImageIcon,
  Layers,
  ListChecks,
  Lock,
  Monitor,
  Quote,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Timer,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CountdownOffer } from "@/components/CountdownOffer";

import heroMockup from "@/assets/hero-mockup.jpg";
import preview1 from "@/assets/preview-1.jpg";
import preview2 from "@/assets/preview-2.jpg";
import preview3 from "@/assets/preview-3.jpg";
import preview4 from "@/assets/preview-4.jpg";
import preview5 from "@/assets/preview-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit de Revisão Visual — 20 Mapas Mentais de Medicina" },
      {
        name: "description",
        content:
          "20 mapas mentais digitais de Medicina para deixar sua revisão mais visual, organizada e prática. Material de apoio aos estudos, com 3 bônus.",
      },
      { property: "og:title", content: "20 Mapas Mentais de Medicina para Turbinar sua Revisão" },
      {
        property: "og:description",
        content:
          "Kit de Revisão Visual: 20 mapas mentais digitais de Medicina + 3 bônus para organizar seus estudos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage;
});

const included = [
  { icon: Layers, title: "20 mapas mentais", text: "Um conjunto com 20 mapas mentais de Medicina." },
  { icon: Download, title: "Material digital", text: "Acesso digital, sem envio de produto físico." },
  {
    icon: Compass,
    title: "Conteúdo visual e organizado",
    text: "Informações estruturadas em formato visual.",
  },
  {
    icon: Zap,
    title: "Acesso prático para revisão",
    text: "Consulte o material durante sua rotina de estudos.",
  },
  {
    icon: GraduationCap,
    title: "Ideal para estudantes de Medicina",
    text: "Pensado para quem estuda e revisa muito conteúdo.",
  },
];

const benefits = [
  {
    icon: BookOpen,
    title: "Mais organização",
    text: "Tenha os conteúdos reunidos em um formato visual e fácil de consultar.",
  },
  {
    icon: Brain,
    title: "Revisão visual",
    text: "Utilize uma representação visual para facilitar a consulta e associação das informações.",
  },
  {
    icon: Timer,
    title: "Mais praticidade",
    text: "Tenha um material de apoio para consultar durante sua rotina de estudos.",
  },
  {
    icon: Smartphone,
    title: "Estude onde estiver",
    text: "Utilize o material digital em seus dispositivos compatíveis.",
  },
  {
    icon: Target,
    title: "Foque na revisão",
    text: "Tenha uma ferramenta complementar para organizar seus momentos de revisão.",
  },
];

const bonuses = [
  {
    icon: ListChecks,
    tag: "Bônus 1",
    title: "Checklist de Revisão",
    text: "Uma lista prática para ajudar você a organizar os conteúdos que deseja revisar.",
  },
  {
    icon: CalendarCheck,
    tag: "Bônus 2",
    title: "Planner de Estudos",
    text: "Material para ajudar a organizar os momentos de estudo e revisão.",
  },
  {
    icon: FileText,
    tag: "Bônus 3",
    title: "Guia de Revisão com Mapas Mentais",
    text: "Um guia simples com sugestões de como utilizar mapas mentais como material complementar durante os estudos.",
  },
];

const previews = [
  { src: preview1, alt: "Prévia de mapa mental de Medicina com estrutura em ramificações" },
  { src: preview2, alt: "Prévia de mapa mental com tópicos organizados visualmente" },
  { src: preview3, alt: "Prévia de mapa mental com ramificações e subtópicos" },
  { src: preview4, alt: "Prévia de mapa mental em layout limpo e organizado" },
  { src: preview5, alt: "Prévia de mapa mental com blocos de conteúdo estruturados" },
];

const testimonials = [
  "Os mapas deixaram minha revisão muito mais organizada. Gostei principalmente da praticidade para consultar o conteúdo.",
  "Gostei bastante do formato visual. É um material que consigo consultar rapidamente durante meus estudos.",
  "Uma forma diferente e prática de revisar os conteúdos. O material ficou muito bem organizado.",
];

const faqs = [
  {
    q: "O que está incluído no Kit?",
    a: "O produto inclui 20 mapas mentais digitais de Medicina e os bônus apresentados na página de vendas.",
  },
  {
    q: "O produto é físico?",
    a: "Não. O produto é digital e será disponibilizado conforme as condições de acesso apresentadas no momento da compra.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim, desde que o dispositivo seja compatível com o formato do arquivo disponibilizado.",
  },
  {
    q: "Os mapas substituem meus estudos?",
    a: "Não. O material deve ser utilizado como ferramenta complementar de revisão e organização dos estudos.",
  },
  {
    q: "E se eu comprar e não gostar?",
    a: "Você conta com uma garantia de 7 dias. Consulte as condições apresentadas na oferta para solicitar o reembolso dentro do prazo.",
  },
];

function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">{text}</p> : null}
    </div>
  );
}

function DeviceFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-2 shadow-card">
      <div className="flex items-center gap-1.5 px-2 py-1.5">
        <span className="size-2 rounded-full bg-muted" />
        <span className="size-2 rounded-full bg-muted" />
        <span className="size-2 rounded-full bg-muted" />
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={1024}
        height={768}
        className="aspect-4/3 w-full rounded-2xl object-cover"
      />
    </div>
  );
}

function SalesPage() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="bg-gradient-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              <Sparkles className="size-3.5" />
              Kit de Revisão Visual
            </span>
            <h1 className="mt-6 text-pretty text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
              20 Mapas Mentais de Medicina para{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Turbinar sua Revisão
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
              Transforme conteúdos de Medicina em revisões mais visuais, organizadas e práticas para
              facilitar sua rotina de estudos.
            </p>

            <div className="mt-8">
              <Button variant="cta" size="xl" asChild className="w-full sm:w-auto">
                <a href="#oferta">Quero acessar os 20 mapas mentais</a>
              </Button>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Download className="size-4 text-primary" /> Produto 100% digital
              </li>
              <li className="flex items-center gap-2">
                <Monitor className="size-4 text-primary" /> Celular, tablet e computador
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" /> Garantia de 7 dias
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-brand-soft/70 blur-2xl" aria-hidden />
            <img
              src={heroMockup}
              alt="Mapas mentais de Medicina exibidos em tablet e celular"
              width={1280}
              height={960}
              className="relative w-full rounded-3xl border border-border object-cover shadow-card"
            />
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI RECEBER */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionTitle
          eyebrow="O produto"
          title="O que você vai receber?"
          text="Você terá acesso a um conjunto de 20 mapas mentais desenvolvidos para tornar sua revisão mais visual e organizada, ajudando você a consultar os conteúdos de maneira prática durante sua rotina de estudos."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item) => (
            <div key={item.title} className="surface-card p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-soft text-primary">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="mb-5 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
            <ImageIcon className="size-4 text-primary" />
            Prévia visual de algumas páginas do material
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            {previews.slice(0, 3).map((item) => (
              <DeviceFrame key={item.alt} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE ESCOLHER */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionTitle
            eyebrow="Por que escolher nosso material?"
            title="Estudar pode ser mais visual e organizado."
            text="Mapas mentais ajudam a reunir informações em uma estrutura visual, tornando a consulta e a organização do que você já estuda mais simples no dia a dia."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="surface-card h-full p-6">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-soft">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionTitle
          eyebrow="Bônus inclusos"
          title="E para deixar seu kit ainda mais completo..."
          text="Três materiais complementares para apoiar a organização dos seus estudos."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {bonuses.map((bonus) => (
            <div key={bonus.title} className="surface-card overflow-hidden">
              <div className="bg-brand-soft px-6 py-8">
                <div className="mx-auto flex h-36 w-28 flex-col items-center justify-center rounded-xl border border-border bg-card shadow-card">
                  <bonus.icon className="size-8 text-primary" />
                  <span className="mt-3 px-3 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {bonus.title}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {bonus.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{bonus.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{bonus.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="border-y border-border bg-brand-soft/60">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:py-24">
          <SectionTitle eyebrow="Oferta" title="Tenha agora seu Kit de Revisão Visual" />

          <div className="mt-10">
            <CountdownOffer />
          </div>

          <div className="surface-card mt-10 overflow-hidden">
            <div className="grid gap-8 p-7 sm:p-10 md:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  O que está incluído
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    20 Mapas Mentais de Medicina
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    Bônus 1 — Checklist de Revisão
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    Bônus 2 — Planner de Estudos
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    Bônus 3 — Guia de Revisão com Mapas Mentais
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-secondary/60 p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  De <span className="line-through">R$ 000,00</span>
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Por apenas
                </p>
                <p className="mt-2 font-display text-5xl font-bold text-primary">R$ 00,00</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Insira aqui o preço original e o preço promocional da sua oferta.
                </p>

                <Button variant="cta" size="xl" className="mt-6 w-full" asChild>
                  <a href="#oferta">Quero meu kit agora</a>
                </Button>

                <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Lock className="size-3.5 text-primary" />
                  Pagamento seguro • Produto digital • Acesso após a confirmação do pagamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL POR DENTRO */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionTitle
          eyebrow="Veja o material por dentro"
          title="Veja alguns exemplos do que você vai receber"
        />

        <div className="mt-12">
          <Carousel className="mx-auto w-full max-w-4xl" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {previews.map((item) => (
                <CarouselItem key={item.alt} className="sm:basis-1/2 lg:basis-1/2">
                  <DeviceFrame src={item.src} alt={item.alt} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 sm:-left-6" />
            <CarouselNext className="-right-3 sm:-right-6" />
          </Carousel>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Algumas páginas são apresentadas apenas como prévia do material.
          </p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionTitle
            eyebrow="Depoimentos"
            title="Quem utiliza o material, entende a diferença na revisão."
            text="Os textos abaixo são modelos de exemplo, para substituição por depoimentos reais de clientes."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((text, index) => (
              <figure key={index} className="surface-card flex h-full flex-col p-6">
                <span className="inline-flex w-fit items-center rounded-full border border-border bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Modelo de depoimento {index + 1}
                </span>
                <Quote className="mt-4 size-6 text-primary" />
                <blockquote className="mt-3 flex-1 text-sm text-foreground">“{text}”</blockquote>
                <figcaption className="mt-4 text-sm font-medium text-muted-foreground">
                  — [Nome do cliente]
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:py-24">
        <div className="surface-card flex flex-col items-center gap-8 p-8 text-center sm:p-12 md:flex-row md:text-left">
          <div className="flex size-28 shrink-0 flex-col items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-cta">
            <BadgeCheck className="size-8" />
            <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">7 dias</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Você tem 7 dias para conhecer o material.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              Você pode adquirir o Kit de Revisão Visual e conhecer o material com tranquilidade.
              Caso dentro do prazo de 7 dias você decida que o produto não é para você, poderá
              solicitar o reembolso conforme as condições da compra.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
              <ShieldCheck className="size-4" />
              Garantia incondicional de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/60">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
          <SectionTitle eyebrow="Dúvidas" title="Perguntas Frequentes" />

          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`item-${index}`}
                className="surface-card border-b px-5"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <Button variant="cta" size="xl" asChild>
              <a href="#oferta">Quero meu kit agora</a>
            </Button>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Sua Marca. Todos os direitos reservados.
          </p>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-primary">
              Termos de Uso
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Suporte
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
