import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, GitHub, Calendar, Tag } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { siteConfig } from "@/data/content";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};

  return {
    title: `${project.title} | Project Details`,
    description: project.longDescription,
  };
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-white/70 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-cyan-deep/10 text-cyan-400 border border-cyan-deep/20 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative w-full h-96 rounded-2xl overflow-hidden neon-border">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Project details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          <div className="lg:col-span-2">
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                {project.longDescription}
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Features</h3>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Modern, responsive design with premium UI/UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Optimized for performance and accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Built with industry-standard best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Scalable architecture for future growth</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Challenges & Solutions</h3>
              <p className="text-white/70 leading-relaxed">
                This project presented unique challenges in creating a seamless user experience while maintaining high performance. Through careful architecture decisions and modern development practices, we delivered a solution that exceeds expectations.
              </p>
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-cyan-400" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-white/80 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    <GitHub className="w-5 h-5" />
                    View on GitHub
                  </a>
                )}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </GlassCard>

            <Button
              href="/contact"
              className="w-full bg-gradient-to-r from-cyan-deep to-blue-ocean hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
            >
              Discuss Similar Project
            </Button>
          </div>
        </motion.div>

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Related Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  href={`/project-details/${related.id}`}
                  className="block"
                >
                  <GlassCard className="p-6 hover:border-cyan-deep/30 transition-all duration-300 hover:glow-cyan">
                    <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {related.title}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2">
                      {related.description}
                    </p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
