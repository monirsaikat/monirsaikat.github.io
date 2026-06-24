"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  BriefcaseBusiness,
  Compass,
  Mail,
  MousePointer2,
  Wrench,
  X,
} from "lucide-react";

const destinations = [
  {
    name: "Workshop",
    label: "Projects",
    href: "/projects",
    description: "Products, systems, and open-source builds.",
    icon: BriefcaseBusiness,
    position: "left-[10%] top-[38%]",
  },
  {
    name: "The Library",
    label: "Blog",
    href: "/blog",
    description: "Field notes from software engineering.",
    icon: BookOpen,
    position: "right-[12%] top-[31%]",
  },
  {
    name: "Tool Shed",
    label: "Uses",
    href: "/uses",
    description: "My daily development tools and stack.",
    icon: Wrench,
    position: "right-[19%] bottom-[21%]",
  },
  {
    name: "Village Post",
    label: "Contact",
    href: "/contact",
    description: "Start a project or conversation.",
    icon: Mail,
    position: "left-[18%] bottom-[18%]",
  },
] as const;

export default function HeroVillage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let cleanup = () => {};

    async function setup(canvasElement: HTMLCanvasElement) {
      const [
        { Color3, Color4 },
        { Vector3 },
        { Engine },
        { Scene },
        { ArcRotateCamera },
        { HemisphericLight },
        { DirectionalLight },
        { StandardMaterial },
        { TransformNode },
        { GlowLayer },
        { CreateBox },
        { CreateCylinder },
        { CreateSphere },
        { CreateGround },
        { CreateTorus },
      ] = await Promise.all([
        import("@babylonjs/core/Maths/math.color"),
        import("@babylonjs/core/Maths/math.vector"),
        import("@babylonjs/core/Engines/engine"),
        import("@babylonjs/core/scene"),
        import("@babylonjs/core/Cameras/arcRotateCamera"),
        import("@babylonjs/core/Lights/hemisphericLight"),
        import("@babylonjs/core/Lights/directionalLight"),
        import("@babylonjs/core/Materials/standardMaterial"),
        import("@babylonjs/core/Meshes/transformNode"),
        import("@babylonjs/core/Layers/glowLayer"),
        import("@babylonjs/core/Meshes/Builders/boxBuilder.pure"),
        import("@babylonjs/core/Meshes/Builders/cylinderBuilder.pure"),
        import("@babylonjs/core/Meshes/Builders/sphereBuilder.pure"),
        import("@babylonjs/core/Meshes/Builders/groundBuilder.pure"),
        import("@babylonjs/core/Meshes/Builders/torusBuilder.pure"),
      ]);

      if (disposed) return;

      const engine = new Engine(canvasElement, true, {
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
        stencil: false,
      });
      engine.setHardwareScalingLevel(
        1 / Math.min(window.devicePixelRatio || 1, 1.5),
      );

      const scene = new Scene(engine);
      scene.clearColor = new Color4(0.55, 0.77, 0.88, 1);
      scene.fogMode = Scene.FOGMODE_EXP2;
      scene.fogDensity = 0.012;
      scene.fogColor = Color3.FromHexString("#a7cbd2");
      scene.skipPointerMovePicking = true;

      const camera = new ArcRotateCamera(
        "village-camera",
        -1.15,
        1.08,
        23,
        new Vector3(0, 0.6, 0),
        scene,
      );
      camera.lowerRadiusLimit = 18;
      camera.upperRadiusLimit = 28;
      camera.lowerBetaLimit = 0.75;
      camera.upperBetaLimit = 1.35;
      camera.wheelPrecision = 80;
      camera.panningSensibility = 0;
      camera.attachControl(canvasElement, true);

      const ambient = new HemisphericLight(
        "sky-light",
        new Vector3(0, 1, 0),
        scene,
      );
      ambient.diffuse = Color3.FromHexString("#d8f1e2");
      ambient.groundColor = Color3.FromHexString("#486b4e");
      ambient.intensity = 1.3;

      const sun = new DirectionalLight(
        "sun",
        new Vector3(-0.7, -1, 0.45),
        scene,
      );
      sun.diffuse = Color3.FromHexString("#ffe2a1");
      sun.intensity = 1.7;

      const root = new TransformNode("saikat-village", scene);

      function material(name: string, color: string) {
        const mat = new StandardMaterial(name, scene);
        mat.diffuseColor = Color3.FromHexString(color);
        mat.specularColor = Color3.Black();
        return mat;
      }

      const grass = material("meadow", "#6f9b58");
      const grassDark = material("meadow-edge", "#3f6645");
      const pathMaterial = material("village-path", "#c5a879");
      const water = material("pond-water", "#4ca5ad");
      const trunk = material("tree-trunk", "#76543d");
      const foliage = [
        material("leaves-light", "#7aa95d"),
        material("leaves-mid", "#527f4d"),
        material("leaves-dark", "#355f43"),
      ];
      const stone = material("stone", "#78857d");
      const windowMaterial = material("warm-windows", "#ffd36b");
      windowMaterial.emissiveColor = Color3.FromHexString("#a86619");

      const island = CreateCylinder(
        "floating-meadow",
        {
          diameterTop: 20,
          diameterBottom: 17.5,
          height: 2.2,
          tessellation: 48,
        },
        scene,
      );
      island.position.y = -1.25;
      island.material = grassDark;
      island.parent = root;

      const meadow = CreateCylinder(
        "meadow-top",
        {
          diameter: 20.15,
          height: 0.35,
          tessellation: 48,
        },
        scene,
      );
      meadow.position.y = -0.05;
      meadow.material = grass;
      meadow.parent = root;

      const path = CreateGround(
        "main-path",
        { width: 3.2, height: 16, subdivisions: 1 },
        scene,
      );
      path.position.y = 0.15;
      path.rotation.y = -0.22;
      path.material = pathMaterial;
      path.parent = root;

      const pond = CreateCylinder(
        "pond",
        { diameter: 4.2, height: 0.12, tessellation: 40 },
        scene,
      );
      pond.scaling.z = 0.62;
      pond.position.set(3.8, 0.17, 2.8);
      pond.material = water;
      pond.parent = root;

      const pondRing = CreateTorus(
        "pond-bank",
        { diameter: 4.25, thickness: 0.17, tessellation: 48 },
        scene,
      );
      pondRing.scaling.z = 0.62;
      pondRing.position.set(3.8, 0.2, 2.8);
      pondRing.material = stone;
      pondRing.parent = root;

      function createTree(
        name: string,
        x: number,
        z: number,
        scale: number,
        colorIndex: number,
      ) {
        const tree = new TransformNode(name, scene);
        tree.position.set(x, 0.2, z);
        tree.scaling.setAll(scale);
        tree.parent = root;

        const treeTrunk = CreateCylinder(
          `${name}-trunk`,
          { diameter: 0.34, height: 1.8, tessellation: 8 },
          scene,
        );
        treeTrunk.position.y = 0.85;
        treeTrunk.material = trunk;
        treeTrunk.parent = tree;

        [1.7, 2.35, 2.9].forEach((y, index) => {
          const crown = CreateCylinder(
            `${name}-crown-${index}`,
            {
              diameterTop: 0,
              diameterBottom: 2.3 - index * 0.35,
              height: 1.6,
              tessellation: 9,
            },
            scene,
          );
          crown.position.y = y;
          crown.material = foliage[(colorIndex + index) % foliage.length];
          crown.parent = tree;
        });
      }

      function createHouse(
        name: string,
        x: number,
        z: number,
        rotation: number,
        wallColor: string,
        roofColor: string,
        scale = 1,
      ) {
        const house = new TransformNode(name, scene);
        house.position.set(x, 0.2, z);
        house.rotation.y = rotation;
        house.scaling.setAll(scale);
        house.parent = root;

        const walls = CreateBox(
          `${name}-walls`,
          { width: 3.1, height: 2.2, depth: 2.5 },
          scene,
        );
        walls.position.y = 1.1;
        walls.material = material(`${name}-wall-material`, wallColor);
        walls.parent = house;

        const roof = CreateCylinder(
          `${name}-roof`,
          {
            diameter: 3.9,
            height: 3.2,
            tessellation: 3,
          },
          scene,
        );
        roof.rotation.z = Math.PI / 2;
        roof.scaling.z = 0.78;
        roof.position.y = 2.65;
        roof.material = material(`${name}-roof-material`, roofColor);
        roof.parent = house;

        const door = CreateBox(
          `${name}-door`,
          { width: 0.65, height: 1.25, depth: 0.08 },
          scene,
        );
        door.position.set(0, 0.63, -1.29);
        door.material = trunk;
        door.parent = house;

        [-0.9, 0.9].forEach((windowX, index) => {
          const window = CreateBox(
            `${name}-window-${index}`,
            { width: 0.48, height: 0.55, depth: 0.08 },
            scene,
          );
          window.position.set(windowX, 1.25, -1.3);
          window.material = windowMaterial;
          window.parent = house;
        });
      }

      createHouse("workshop", -4.9, -2.6, 0.18, "#c8794e", "#704238", 1.08);
      createHouse("library", 4.4, -3.1, -0.25, "#e4c58d", "#5f493d", 0.95);
      createHouse("tool-shed", 5.2, 4.1, 0.35, "#8fa56b", "#523b32", 0.76);
      createHouse("village-post", -4.4, 4.2, -0.42, "#d9a97d", "#794b3b", 0.72);

      [
        [-7.4, -4.7, 1.05, 0],
        [-7.8, 1.3, 0.86, 1],
        [-6.5, 5.1, 1.15, 2],
        [-2.2, 6.9, 0.9, 1],
        [1.2, 7.6, 1.12, 0],
        [6.5, 6.1, 1, 2],
        [7.8, 1.1, 1.1, 1],
        [7.1, -5.2, 0.9, 0],
        [1.8, -7.4, 1.2, 2],
        [-2.9, -7.1, 0.82, 1],
        [-1.4, 3.9, 0.7, 0],
        [2.1, -1.2, 0.74, 2],
      ].forEach(([x, z, scale, color], index) =>
        createTree(`pine-${index}`, x, z, scale, color),
      );

      const rocks = [
        [2.1, 4.5, 0.65],
        [5.5, 1.7, 0.48],
        [-1.6, -5.8, 0.52],
        [-6.3, -0.6, 0.4],
      ];
      rocks.forEach(([x, z, scale], index) => {
        const rock = CreateSphere(
          `rock-${index}`,
          { diameter: 1.2, segments: 5 },
          scene,
        );
        rock.position.set(x, 0.35, z);
        rock.scaling.set(scale, scale * 0.7, scale);
        rock.material = stone;
        rock.parent = root;
      });

      const fireMaterial = material("campfire", "#ffb347");
      fireMaterial.emissiveColor = Color3.FromHexString("#d86018");
      const fire = CreateSphere(
        "campfire",
        { diameter: 0.45, segments: 8 },
        scene,
      );
      fire.position.set(0.8, 0.45, 2.6);
      fire.scaling.y = 1.5;
      fire.material = fireMaterial;
      fire.parent = root;

      const glow = new GlowLayer("village-glow", scene, {
        blurKernelSize: 24,
      });
      glow.intensity = 0.35;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      let visible = true;
      let elapsed = 0;

      const observer = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0.01 },
      );
      observer.observe(canvasElement);

      const handleResize = () => engine.resize();
      window.addEventListener("resize", handleResize);

      engine.runRenderLoop(() => {
        if (!visible && !reducedMotion) return;

        if (!reducedMotion) {
          elapsed += Math.min(engine.getDeltaTime(), 32) / 1000;
          fire.scaling.y = 1.35 + Math.sin(elapsed * 7) * 0.18;
          fire.position.y = 0.45 + Math.sin(elapsed * 4) * 0.03;
        }
        scene.render();
      });

      setReady(true);

      cleanup = () => {
        observer.disconnect();
        window.removeEventListener("resize", handleResize);
        scene.dispose();
        engine.dispose();
      };
    }

    void setup(canvas);

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-[#90b09a]/30 bg-[#9bc8ce] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
      <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-[#17352d]/75 px-3 py-2 text-white shadow-lg backdrop-blur-md">
        <Compass size={13} className="text-[#d9ee9f]" />
        <span className="font-mono text-[9px] tracking-[0.18em] uppercase">
          Saikat Village
        </span>
      </div>

      <div className="absolute right-4 top-4 z-20 hidden items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-white/80 backdrop-blur-md sm:flex">
        <MousePointer2 size={11} />
        <span className="font-mono text-[8px] tracking-widest uppercase">
          Drag to explore
        </span>
      </div>

      <canvas
        ref={canvasRef}
        className="h-130 w-full cursor-grab touch-none active:cursor-grabbing"
        aria-label="Interactive 3D nature village with portfolio destinations"
      />

      {!ready && (
        <div className="absolute inset-0 z-30 grid place-items-center bg-[#9bc8ce]">
          <div className="text-center text-[#17352d]">
            <span className="mx-auto mb-3 block h-5 w-5 animate-spin rounded-full border-2 border-[#17352d]/20 border-t-[#17352d]" />
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase">
              Growing the village
            </p>
          </div>
        </div>
      )}

      {destinations.map(({ name, icon: Icon, position }, index) => (
        <button
          key={name}
          type="button"
          onClick={() => setSelected(index)}
          className={`absolute z-20 ${position} group`}
          aria-label={`Explore ${name}`}
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-[#17352d]/85 text-[#eff8d5] shadow-[0_5px_20px_rgba(0,0,0,0.35)] backdrop-blur transition-transform group-hover:scale-110">
            <Icon size={13} />
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/20" />
          </span>
          <span className="mt-1 block whitespace-nowrap rounded bg-[#17352d]/80 px-2 py-1 font-mono text-[8px] tracking-wider text-white uppercase opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            {name}
          </span>
        </button>
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#10251f]/85 to-transparent" />

      <div className="absolute bottom-4 left-4 z-20 text-white">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#d9ee9f] uppercase">
          A small world of software
        </p>
        <p className="mt-1 max-w-60 text-xs leading-relaxed text-white/75">
          Every place opens a different part of my work.
        </p>
      </div>

      {selected !== null && (
        <div className="absolute inset-x-4 bottom-4 z-30 rounded-xl border border-white/25 bg-[#10251f]/92 p-4 text-white shadow-2xl backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-3 top-3 text-white/50 transition-colors hover:text-white"
            aria-label="Close destination"
          >
            <X size={15} />
          </button>
          <p className="font-mono text-[9px] tracking-[0.18em] text-[#d9ee9f] uppercase">
            {destinations[selected].name}
          </p>
          <h2 className="mt-1 text-lg font-bold">
            {destinations[selected].label}
          </h2>
          <p className="mt-1 text-xs text-white/65">
            {destinations[selected].description}
          </p>
          <Link
            href={destinations[selected].href}
            className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#d9ee9f] px-3 py-2 font-mono text-[10px] font-semibold text-[#17352d] transition-colors hover:bg-white"
          >
            Enter {destinations[selected].name}
          </Link>
        </div>
      )}
    </div>
  );
}
