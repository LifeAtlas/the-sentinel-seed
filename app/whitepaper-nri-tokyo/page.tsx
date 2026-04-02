"use client";
import StoryNav from "../components/StoryNav";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */

interface ParagraphProps {
  children: string;
  keyLine?: boolean;
  delay?: number;
}

interface ChapterDividerProps {
  year: string;
  chapter: string;
  title: string;
}

/* ═══════════════════════════════════════════════════════════════
   Hooks
   ═══════════════════════════════════════════════════════════════ */

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -20px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

/* ═══════════════════════════════════════════════════════════════
   ProgressBar
   ═══════════════════════════════════════════════════════════════ */

function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-px"
      style={{ background: "var(--color-border)" }}
    >
      <div
        className="h-full transition-all duration-75 ease-linear"
        style={{
          width: `${progress * 100}%`,
          background:
            "linear-gradient(90deg, var(--color-gold-dim), var(--color-gold))",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Paragraph
   ═══════════════════════════════════════════════════════════════ */

function Paragraph({ children, keyLine = false, delay = 0 }: ParagraphProps) {
  const { ref, visible } = useFadeIn();

  if (keyLine) {
    return (
      <div
        ref={ref}
        className="my-14 md:my-20 text-center px-4 transition-all duration-[1800ms] ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(18px)",
          transitionDelay: `${delay}ms`,
        }}
      >
        <div
          className="inline-block w-8 h-px mb-8"
          style={{ background: "var(--color-gold-dim)" }}
        />
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-[1.5] max-w-2xl mx-auto"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "var(--color-gold)",
          }}
        >
          &ldquo;{children}&rdquo;
        </p>
        <div
          className="inline-block w-8 h-px mt-8"
          style={{ background: "var(--color-gold-dim)" }}
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <p
        className="text-base md:text-[1.05rem] leading-[1.95] mb-7"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {children}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ChapterDivider
   ═══════════════════════════════════════════════════════════════ */

function ChapterDivider({ year, chapter, title }: ChapterDividerProps) {
  const { ref, visible } = useFadeIn(0.08);

  return (
    <div
      ref={ref}
      className="my-24 md:my-32 text-center transition-all duration-[2000ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
      }}
    >
      {/* Gold lines */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <div
          className="h-px flex-1 max-w-[120px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold-dim))",
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--color-gold-dim)" }}
        />
        <div
          className="h-px flex-1 max-w-[120px]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold-dim), transparent)",
          }}
        />
      </div>

      {/* Year / era */}
      <p
        className="text-xs tracking-[0.6em] uppercase mb-3"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
      >
        {year}
      </p>

      {/* Chapter label */}
      <p
        className="text-xs tracking-[0.4em] uppercase mb-5"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-text-secondary)",
          opacity: 0.6,
        }}
      >
        {chapter}
      </p>

      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-light tracking-wide"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text)",
        }}
      >
        {title}
      </h2>

      {/* Bottom lines */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <div
          className="h-px flex-1 max-w-[80px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-border))",
          }}
        />
        <div
          className="w-px h-4"
          style={{ background: "var(--color-gold-dim)", opacity: 0.4 }}
        />
        <div
          className="h-px flex-1 max-w-[80px]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-border), transparent)",
          }}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ColophonBlock
   ═══════════════════════════════════════════════════════════════ */

function ColophonBlock() {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className="mt-28 mb-10 text-center transition-all duration-[1800ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
      }}
    >
      <div className="flex items-center justify-center gap-6 mb-10">
        <div
          className="h-px flex-1 max-w-[100px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold-dim))",
          }}
        />
        <div
          className="w-1 h-1 rounded-full"
          style={{ background: "var(--color-gold-dim)", opacity: 0.6 }}
        />
        <div
          className="h-px flex-1 max-w-[100px]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold-dim), transparent)",
          }}
        />
      </div>

      <p
        className="text-sm mb-1"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-text-secondary)",
          opacity: 0.4,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        後記
      </p>
      <p
        className="text-base md:text-lg italic font-light mt-3 max-w-xl mx-auto leading-[1.9]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text-secondary)",
        }}
      >
        この物語は、二〇二五年九月十八日に行われた野村総合研究所（NRI）チームとWINNIIO CEO ニコラス・ヴェーンとの実際のレクチャーに基づいています。「デジタルツインとAI」をテーマに、建設、ヘルスケア、物流、製造、ロボティクス、そして人間のデジタルツインについて語られた九十八分間の対話を、物語として再構成しました。
      </p>
      <p
        className="text-sm italic font-light mt-5"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text-secondary)",
          opacity: 0.5,
        }}
      >
        Life Atlas &mdash; 人間のためのデジタルツイン・プラットフォーム
      </p>

      <div className="mt-10 flex justify-center">
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-gold-dim), transparent)",
          }}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BackLink
   ═══════════════════════════════════════════════════════════════ */

function BackLink() {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className="mt-16 mb-8 text-center transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
      }}
    >
      <Link
        href="/"
        className="inline-block text-xs tracking-[0.4em] uppercase transition-colors duration-300"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--color-gold)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--color-gold-dim)";
        }}
      >
        &larr;&nbsp;&nbsp;The Sentinel Stories
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function WhitepaperNRITokyo() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.05);

  return (
    <main className="min-h-screen">
      <ProgressBar />
      <StoryNav />

      {/* ════════════════════════════════════════════════
          Title Screen
          ════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 65%)",
          }}
        />

        {/* Floating golden motes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 4 === 0 ? "2px" : "1px",
                height: i % 4 === 0 ? "2px" : "1px",
                background: "var(--color-gold)",
                opacity: 0.08 + (i % 5) * 0.03,
                left: `${5 + i * 7}%`,
                top: `${10 + (i % 6) * 14}%`,
                animation: `mote ${8 + i * 1.5}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>

        <div
          ref={titleRef}
          className="text-center px-6 relative transition-all duration-[2500ms] ease-out"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "none" : "translateY(28px)",
          }}
        >
          {/* Vertical gold line */}
          <div className="mb-10 flex justify-center">
            <div
              className="w-px h-20"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--color-gold-dim))",
              }}
            />
          </div>

          {/* Collection label */}
          <p
            className="text-xs tracking-[0.6em] uppercase mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-gold-dim)",
            }}
          >
            Life Atlas &mdash; The Sentinel Stories
          </p>

          {/* Story type & era */}
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.5,
            }}
          >
            White Paper &mdash; NRI Tokyo &nbsp;&bull;&nbsp; Sep 18, 2025
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            デジタルの鏡に映る未来
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-6 max-w-lg mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            東京からヨーテボリへの旅 &mdash; A Journey from Tokyo to Gothenburg
          </p>

          {/* Byline */}
          <p
            className="text-xs tracking-[0.35em] uppercase mb-16"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.4,
            }}
          >
            Sep 18, 2025 &mdash; 大手町 &mdash; 野村総合研究所
          </p>

          {/* Scroll indicator */}
          <div
            className="flex flex-col items-center gap-3"
            style={{ color: "var(--color-gold-dim)" }}
          >
            <span
              className="text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Scroll
            </span>
            <div
              className="w-px h-10 animate-pulse"
              style={{ background: "var(--color-gold-dim)" }}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          Story Body
          ════════════════════════════════════════════════ */}
      <article className="max-w-[680px] mx-auto px-6 pb-32">

        {/* ── 第一章 ── */}
        <ChapterDivider
          year="Sep 18, 2025"
          chapter="第一章"
          title="大手町の朝"
        />

        <Paragraph>
          九月の東京は、まだ夏の残り香を纏っていた。
        </Paragraph>

        <Paragraph>
          大手町の野村総合研究所（NRI）本社ビルの二十三階、鈴木一朗は窓から皇居の緑を眺めながら、手元のタブレットに目を落とした。今日の会議資料には、スウェーデンから参加する一人の男の名前が記されている。
        </Paragraph>

        <Paragraph>
          Nicolas Waern（ニコラス・ヴェーン） ― WINNIIO CEO、Life Atlas創業者。
        </Paragraph>

        <Paragraph>
          「デジタルツインとAI」。
        </Paragraph>

        <Paragraph>
          鈴木はその言葉を口の中で転がした。NRIは長年、日本企業のデジタルトランスフォーメーションを支援してきた。しかし今、日本が直面している課題は、単なるデジタル化の先にある。少子高齢化、労働力不足、そして孤独という見えない疫病。二〇四〇年までに一千百万人の労働者が不足すると予測される国で、テクノロジーは本当に人間を救えるのか。
        </Paragraph>

        <Paragraph>
          小谷真弘がガラス張りの会議室に入ってきた。続いて村川、松信、中澤。NRIの精鋭たちが、それぞれの専門領域を携えて集結していた。建設、ヘルスケア、物流、サイバーセキュリティ――日本の産業の縮図がこの部屋にあった。
        </Paragraph>

        <Paragraph>
          ボニー・コートレイがオンラインで接続を確認する声が、スピーカーから流れた。
        </Paragraph>

        <Paragraph>
          「ニコラスさん、もう少しでスズキさんが来ます」
        </Paragraph>

        <Paragraph>
          その瞬間、画面の向こうに一人の男が現れた。北欧の柔らかな光を背景に、静かだが確信に満ちた眼差し。
        </Paragraph>

        <Paragraph>
          「Hello.（こんにちは）」
        </Paragraph>

        <Paragraph>
          ニコラスは微笑んだ。そして、村上春樹の名を口にした。
        </Paragraph>

        <Paragraph>
          「ムラカワ……権威のある名前ですね。本を読んだことがあります。いや、ムラカミでしたね」
        </Paragraph>

        <Paragraph>
          会議室に笑い声が広がった。大手町のビルと、ヨーテボリの自宅書斎が、一瞬で繋がった。
        </Paragraph>

        {/* ── 第二章 ── */}
        <ChapterDivider
          year="現実という問い"
          chapter="第二章"
          title="現実という共通言語"
        />

        <Paragraph>
          小川清美が通訳として場を整え、最初の質問が投げかけられた。
        </Paragraph>

        <Paragraph>
          「デジタルツイン・AI・ロボティクスプロジェクトの成功に最も重要な要素は何ですか？」
        </Paragraph>

        <Paragraph>
          ニコラスは一拍置いて、こう切り出した。
        </Paragraph>

        <Paragraph keyLine>
          データから始めてはいけません。
        </Paragraph>

        <Paragraph>
          会議室が一瞬、静まり返った。データドリブンという言葉が呪文のように唱えられる時代に、データから始めるなと言う男がいる。
        </Paragraph>

        <Paragraph>
          「私がオックスフォード大学でゲスト講義している方法論があります。ズームアウトして、ズームインする。地球全体にズームアウトしてください。デジタルツインとは、現実の視覚的・仮想的な再現です。現実は常に三次元です。地球からズームインして日本に、建設現場に、病院に、研究室に。なぜなら、共有された現実を創造したいからです。」
        </Paragraph>

        <Paragraph>
          鈴木はペンを止めた。この男は、テクノロジーの話をしているのではない。認識論の話をしている。
        </Paragraph>

        <Paragraph>
          ニコラスは続けた。
        </Paragraph>

        <Paragraph>
          「サイバーセキュリティの専門家も、ロボット工学者も、データエンジニアも、法務担当者も、マーケティングも――全員が同じ世界で働いています。しかし、それぞれが異なるアプリケーションを通して世界を見ている。だから、誰も本当の意味で対話できない。」
        </Paragraph>

        <Paragraph>
          「現実を使って、全員が同意できるもの、全員が見えるもの、全員が理解できるものを創る。それが出発点です。データではなく、常にインパクトから始まるのです。」
        </Paragraph>

        <Paragraph>
          小谷がメモを取る手を速めた。この言葉は、NRIが長年格闘してきた問題の核心を突いていた。
        </Paragraph>

        {/* ── 第三章 ── */}
        <ChapterDivider
          year="仮想の建設現場"
          chapter="第三章"
          title="スウェーデンに病院を建てる"
        />

        <Paragraph>
          「具体的な例があると助かります」と小川が伝えた。
        </Paragraph>

        <Paragraph>
          「建設、病院、物流――この三つに興味があります」
        </Paragraph>

        <Paragraph>
          ニコラスはうなずいた。「では、スウェーデンに病院を建てましょう。」
        </Paragraph>

        <Paragraph>
          そして、彼は地球を動かし始めた。
        </Paragraph>

        <Paragraph>
          「まず、PESTLE分析から始めます。政治的、環境的、社会的、技術的、倫理的、法的、人口統計的な文脈。ヨーテボリ郊外に建設するとしましょう。」
        </Paragraph>

        <Paragraph>
          「地球にズームアウトし、ヨーロッパにズームイン、さらにヨーテボリ郊外に。誰かがデジタルツインを使って、生成的デザインとパラメトリックデザイン、GISデータ、そして複数の相互運用性レベルを組み合わせて、最適な建設場所を特定します。」
        </Paragraph>

        <Paragraph>
          「技術的相互運用性、意味的相互運用性、組織的相互運用性、法的相互運用性、そしてインパクトと社会的相互運用性。」
        </Paragraph>

        <Paragraph>
          鈴木の頭の中で、パズルのピースが噛み合い始めた。これは建設の話ではない。文明のオペレーティングシステムの話だ。
        </Paragraph>

        <Paragraph>
          「多くの場合、病院を建てるとき、実は間違った場所に建てているのです。素晴らしい病院を建てても、そこにあるべきではない。GIS情報を使って、人口動態、移動パターン、エネルギーへの近接性を分析し、この場所に建てるべきだと結論づける。」
        </Paragraph>

        <Paragraph>
          「そして、すべてを仮想空間で先に行うのです。物理世界で何かをする前に。」
        </Paragraph>

        {/* ── 第四章 ── */}
        <ChapterDivider
          year="供給鎖の地図"
          chapter="第四章"
          title="供給鎖が見える星図"
        />

        <Paragraph>
          ニコラスは画面を共有した。地球が映し出された。七千五百基のスターリンク衛星が光の点として浮かんでいる。四万便の航空機、四万隻の船舶。物流の脈動が、宇宙から見える。
        </Paragraph>

        <Paragraph>
          「病院の正面に使う大きなガラスのファサードとメタルパーツがあるとします。百の異なるパーツが、世界中の十の異なる製造工場から来る。その要素を選択すると、すぐに線が見えます。Google Earthのように地球全体を見ながら、どのパーツがどの工場から来るかが可視化されます。」
        </Paragraph>

        <Paragraph>
          「そして関税が発生したら？」
        </Paragraph>

        <Paragraph>
          会議室の全員が、二〇二五年の地政学的現実を思い浮かべた。
        </Paragraph>

        <Paragraph>
          「デジタルツインは動的に再編成します。AIエージェントがサプライチェーンを担当し、法的側面を確認し、マルチエージェントシステムが自律的に調整して、代替の製造工場を見つけ、交渉し、置き換えます。視覚的に、供給鎖がどう変化したかを全員が見られるのです。」
        </Paragraph>

        <Paragraph>
          「タイムスライダーを動かしてください。五年前の計画段階。二年後、関税が発生。さらに一年後、EUの環境規制。供給鎖の線が世界中から北欧だけに収束していく。その変化を、全員が見ることができる。」
        </Paragraph>

        <Paragraph>
          中澤が小さく息を呑んだ。これは理論ではない。現実に動いているシステムの描写だった。
        </Paragraph>

        {/* ── 第五章 ── */}
        <ChapterDivider
          year="空間の記憶"
          chapter="第五章"
          title="製造工場にテレポートする"
        />

        <Paragraph>
          ノキア・ベル研究所との共同プロジェクトの映像が流れた。ホッケーアリーナの360度カメラ映像が、ガウシアンスプラットとNeRF技術で三次元空間に再構成されている。
        </Paragraph>

        <Paragraph>
          「製造工場に固定カメラを六台設置します。現実を一週間記録します。ロボットの動き、人の動き、効率性。そして、そのAI、NeRF、ガウシアンスプラットを組み合わせることで、あなたはこの現実にテレポートできます。」
        </Paragraph>

        <Paragraph>
          「三週間前の出来事を見たいとします。カメラ一、二、三の角度からだけでなく、空間内の任意の場所から見ることができる。時間のどの時点でも、この空間にテレポートして、そこからの視点で何が起きたかを見られるのです。」
        </Paragraph>

        <Paragraph>
          佐久間・小暮沙良がマイクのミュートを解除した。
        </Paragraph>

        <Paragraph>
          「デジタル空間が現実世界に影響を与える例はありますか？デジタル空間でデータを収集して分析し、それを現実世界にフィードバックするような。」
        </Paragraph>

        <Paragraph>
          ニコラスはうなずいた。「まさにそれがデジタルツインの本質です。病院を建てて運用し、センサーからデータを収集します。デジタルツインが学習し、次に何かを建てるとき、より多くの情報を持っている。フェニックス戦略です。データは決して失われない。すべてのインタラクションが、常により良い方法につながるのです。」
        </Paragraph>

        {/* ── 第六章 ── */}
        <ChapterDivider
          year="孤独という疫病"
          chapter="第六章"
          title="孤独を癒すゴースト・イン・ザ・シェル"
        />

        <Paragraph>
          小川が、この会議の核心に触れる質問を投げた。
        </Paragraph>

        <Paragraph>
          「日本では人口減少と高齢化が同時に進んでいます。デジタルツイン、AI、ロボティクスはこの問題の解決に貢献できると思いますか？」
        </Paragraph>

        <Paragraph>
          ニコラスの声が、一段と深くなった。
        </Paragraph>

        <Paragraph>
          「若い世代はすでにAIを親友のように扱っています。ChatGPTに記憶があり、私の専門的なやり取りのほとんどを知っている。それが堀（モート）になる。新しいLLMに移行すれば、私のことを何も知らない。」
        </Paragraph>

        <Paragraph>
          「Life Atlasが創っているのは、人々のデジタルツインです。しかし、それは単なるデータの複製ではありません。人々が自分自身の基盤AIモデルを生成し、自分自身で制御できるようにすること。アメリカの企業でも、政府でもなく。」
        </Paragraph>

        <Paragraph>
          「近い将来、五千ドルか月額二百ドルで家庭用ロボットが来るでしょう。そのロボットはあなたの家で訓練されている。カメラとすべてを使って、あなたが必要とするものを、ロボットが到着する前から知っている。」
        </Paragraph>

        <Paragraph keyLine>
          攻殻機動隊のように、ロボットの中の魂――それが最も重要なものです。シェルは重要ではない。
        </Paragraph>

        <Paragraph>
          「LLM、あるいは私が呼ぶLQM（Large Quantitative Model、大規模定量モデル）――それがシェルよりも重要なものです。物理的な接点に過ぎない。拡張現実を使えば、そのロボットにどんな外見でも与えられる。ポケモンのゲンガーのように世界中どこでもあなたの周りを歩き回ることもできる。」
        </Paragraph>

        <Paragraph>
          会議室に、不思議な沈黙が訪れた。NRIの研究者たちは、テクノロジーの話を聞きに来たはずだった。しかし、この北欧の男が語っているのは、人間の本質についてだった。
        </Paragraph>

        {/* ── 第七章 ── */}
        <ChapterDivider
          year="九ヶ月から九時間へ"
          chapter="第七章"
          title="九ヶ月が九時間になった日"
        />

        <Paragraph>
          時間が迫る中、小川が最後の質問を伝えた。
        </Paragraph>

        <Paragraph>
          「NASAの極限コラボレーション手法とは何ですか？」
        </Paragraph>

        <Paragraph>
          ニコラスの目が輝いた。
        </Paragraph>

        <Paragraph>
          「NASAとJPL（ジェット推進研究所）は、宇宙ミッションの計画に時間がかかりすぎることに気づきました。二十年後には三ヶ月から九ヶ月かかるようになっていた。複雑さが増し、多くの人々、多くの情報、しかしすべての情報が一箇所にない。すべての人が情報と同じ場所にいない。」
        </Paragraph>

        <Paragraph>
          「彼らがしたことは、適切な人材を見つけ――組織外からも含めて――二十人を一つの部屋に集めた。数百人ではなく。すべての情報をそこに。誰かがホワイトボードに何かを変えれば、全員がそれを見る。自分の領域に戻って再計算し、手を挙げて『そこでは機能したが、私にとって問題が生じた』と言う。」
        </Paragraph>

        <Paragraph keyLine>
          九ヶ月の計画が、九時間になった。
        </Paragraph>

        <Paragraph>
          鈴木が顔を上げた。この数字は誇張ではない。NASAの文献で確認されている。そして、この方法論がデジタルツインと融合したとき、その「部屋」は世界中のどこにでも存在できるようになる。
        </Paragraph>

        {/* ── 終章 ── */}
        <ChapterDivider
          year="九十八分の対話"
          chapter="終章"
          title="橋を架ける"
        />

        <Paragraph>
          会議が終わろうとしていた。九十八分間の対話の中で、東京と北欧の間に見えない橋が架けられていた。
        </Paragraph>

        <Paragraph>
          小川が最後に言った。「ニコラスさん、あなたは未来を見ていますね。とても興味深かった。ありがとうございます。」
        </Paragraph>

        <Paragraph>
          佐久間・小暮沙良が確認した。「多くの企業が、すべての情報と人を同じ場所に集めることに苦労している。それが最も根本的な課題ですよね？」
        </Paragraph>

        <Paragraph>
          「断片化です」とニコラスは答えた。「デジタルツインを現実の視覚的データベースとして見てください。製造工場に入り、最初に聞くことは『ここでどんなシステムを使っていますか？』十のシステムがある。データベースはどこ？情報を取り出して、視覚的な三次元モデルに配置する。それだけです。そして同じ人々を招き入れれば、より良い意思決定ができるようになります。」
        </Paragraph>

        <Paragraph>
          画面が切れた。
        </Paragraph>

        <Paragraph>
          鈴木は窓の外を見た。大手町のビル群が夕暮れに染まり始めていた。二〇四〇年、日本は一千百万人の労働者を失う。しかし今日、この九十八分間の中に、答えの種があった。
        </Paragraph>

        <Paragraph>
          データから始めるな。インパクトから始めろ。すべてを仮想で先に。現実は後から。人間の知恵を、デジタルの鏡に映せ。
        </Paragraph>

        <Paragraph>
          鈴木はタブレットに一行だけメモを残した。
        </Paragraph>

        <Paragraph keyLine>
          現実こそが永続する層である。
        </Paragraph>

        <Paragraph>
          それは、ニコラス・ヴェーンが二十年かけて辿り着いた真理であり、日本が次の二十年で必要とする哲学だった。
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Colophon
            ════════════════════════════════════════════════ */}
        <ColophonBlock />

        {/* ════════════════════════════════════════════════
            Back link
            ════════════════════════════════════════════════ */}
        <BackLink />
      </article>

      <style jsx global>{`
        @keyframes mote {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.08;
          }
          50% {
            opacity: 0.18;
          }
          100% {
            transform: translateY(-40px) translateX(14px) scale(1.4);
            opacity: 0.02;
          }
        }
      `}</style>
    </main>
  );
}
