import NextShare from '@/components/custom/shared/NextShare';
import Image from 'next/image';
import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { ScrollText } from "lucide-react";
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import BlogMobileStickyFooter from '@/components/blog/BlogMobileStickyFooter';

export async function getServerSideProps(context) {
    const { blogSlug } = context.params;
    return {
        props: {
            blogSlug,
        },
    };
}
const Blogpage = ({ blogSlug,screenSize }) => {
     const allCategories = [
    {
      name: "Technology",
      count: 23,
    },
    {
      name: "Business",
      count: 39,
    },
    {
      name: "Health",
      count: 45,
    },
    {
      name: "Education",
      count: 62,
    },
    

  ]
    return (
        <>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-12 gap-4 sec_mb'>
                <div className='col-span-12 lg:col-span-8'>

                    <Image src={`/images/blog/news-img.jpeg`} alt={blogSlug} width={1200} height={400} className='rounded-md mb-6' />
                    <h1 className='text-3xl font-extrabold mb-3'>8 Docker Project Ideas for All Levels With Source Code</h1>
                   
                   <div className='flex flex-wrap justify-between items-center gap-3'> <p><span className='text-primary font-semibold'>By Chandan Singh</span> | Published on Sep 30, 2025</p>

                   <NextShare shareLink="/hello" /></div>

                    <div className='border border-gray-200 p-6 rounded-lg shadow-sm my-6'>
                        <h2 className='text-xl font-bold mb-3 flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-text-left text-primary" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                        </svg>Table of contents</h2>
                        <ul className='list-disc ml-6 text-sm space-y-2'>
                            <li><a href="#what-is-docker">What is Docker?</a></li>
                            <li><a href="#docker-projects-for-beginners">Docker Projects for Beginners</a></li>
                            <li><a href="#docker-projects-for-intermediate-level">Docker Projects for Intermediate Level</a></li>
                            <li><a href="#docker-projects-for-advanced-level">Docker Projects for Advanced Level</a></li>
                        </ul>

                    </div>


                    <div className='blog_content'>
                        <h2 className='text-3xl font-bold mb-3'>What is Docker?</h2>
                        <p>Docker is an open source tool that lets you wrap up applications into containers. Think of them as super lightweight packages that include everything needed to run your app. Your app works the same way whether you’re testing it on your laptop or running it in production.</p>
                        <p>Containers share your computer’s operating system instead of each needing their own copy. This makes them way faster and they use less memory too.</p>
                        <p>We have put together 8 hands-on Docker projects below, sorted from beginner to advanced. These are the kinds of projects that matter in real development work. For each project, you’ll see what it does, the tools involved, and where to find the code.</p>

                        <div className="entry-content">

                            <p>Docker is an open source tool that lets you wrap up applications into containers. Think of them as super lightweight packages that include everything needed to run your app. Your app works the same way whether you’re testing it on your laptop or running it in production.</p>



                            <p>Containers share your computer’s operating system instead of each needing their own copy. This makes them way faster and they use less memory too.</p>



                            <p>We have put together 8 hands-on Docker projects below, sorted from beginner to advanced. These are the kinds of projects that matter in real development work. For each project, you’ll see what it does, the tools involved, and where to find the code.</p>

                            <h2>Docker Projects for Beginners</h2>



                            <h3>1. Multi-Container LAMP Stack Application</h3>



                            <p><strong>Project Details:</strong> Build a classic <a href="https://www.mygreatlearning.com/blog/career-in-web-development/">web development</a> environment using Docker Compose with separate containers for Linux, Apache, MySQL, and PHP. This project teaches the fundamentals of multi-container applications and how services communicate within a Docker network.</p>



                            <h4>Features:</h4>



                            <ul>
                                <li>Separate containers for web server, database, and PHP processing</li>



                                <li>Persistent data storage using Docker volumes</li>



                                <li>Custom PHP application with database connectivity</li>



                                <li>Environment variable configuration for database credentials</li>
                            </ul>



                            <h4>Key Tools &amp; Libraries:</h4>



                            <ul>
                                <li>Docker</li>



                                <li>Docker Compose</li>



                                <li>Apache HTTP Server</li>



                                <li>MySQL</li>



                                <li>PHP</li>
                            </ul>



                            <p><strong>Sample Source Code:</strong></p>



                            <h3>2. Containerized Blog Platform with WordPress</h3>



                            <p><strong>Project Details:</strong> Deploy a fully functional WordPress blog using Docker containers. This project demonstrates how to containerize popular CMS platforms and manage their dependencies, including database persistence and file uploads.</p>



                            <h4>Features:</h4>



                            <ul>
                                <li>WordPress container with PHP-FPM</li>



                                <li>MySQL database container with data persistence</li>



                                <li>Nginx reverse proxy for better performance</li>



                                <li>Volume mapping for themes and plugins</li>



                                <li>Automated backup configuration</li>
                            </ul>



                            <h4>Key Tools &amp; Libraries:</h4>



                            <ul>
                                <li>Docker &amp; Docker Compose</li>



                                <li>WordPress</li>



                                <li>MySQL</li>



                                <li>Nginx</li>



                                <li>phpMyAdmin (optional admin interface)</li>
                            </ul>

                            <h3>3. Development Environment with Hot Reload</h3>



                            <p><strong>Project Details:</strong> Create a containerized Node.js development environment that supports hot reloading, allowing developers to see code changes instantly without rebuilding containers. This project is essential for understanding volume mounting and development workflows.</p>



                            <h4>Features:</h4>



                            <ul>
                                <li>Node.js application container with Express</li>



                                <li>Volume mounting for live code updates</li>



                                <li>Nodemon for automatic server restart</li>



                                <li>MongoDB container for data storage</li>



                                <li>Separate development and production configurations</li>
                            </ul>



                            <h4 class="wp-block-heading" id="key-tools-libraries">Key Tools &amp; Libraries:</h4>



                            <ul class="wp-block-list">
                                <li>Docker &amp; Docker Compose</li>



                                <li>Node.js &amp; Express</li>



                                <li>MongoDB</li>



                                <li>Nodemon</li>
                            </ul>

                            <h2>Intermediate Docker Projects</h2>



                            <h3>4. CI/CD Pipeline with Jenkins and Docker</h3>



                            <p><strong>Project Details:</strong> Build an automated continuous integration and deployment pipeline using Jenkins running in a Docker container. The pipeline automatically builds, tests, and deploys a sample application whenever code is pushed to the repository.</p>



                            <h4>Features:</h4>



                            <ul>
                                <li>Jenkins container with Docker-in-Docker capability</li>



                                <li>Automated build triggers from Git webhooks</li>



                                <li>Multi-stage Docker builds for optimization</li>



                                <li>Automated testing inside containers</li>



                                <li>Deployment to staging and production environments</li>



                                <li>Build artifacts stored in Docker registry</li>
                            </ul>



                            <h4>Key Tools &amp; Libraries:</h4>



                            <ul>
                                <li>Docker &amp; Docker Compose</li>



                                <li>Jenkins</li>



                                <li>Git &amp; GitHub/GitLab</li>



                                <li>Docker Registry or Docker Hub</li>



                                <li>Nginx for application hosting</li>
                            </ul>

                            <h3 class="wp-block-heading" id="5-microservices-architecture-with-service-discovery">5. Microservices Architecture with Service Discovery</h3>



                            <p><strong>Project Details:</strong> Develop a microservices-based e-commerce application with multiple independent services (user service, product service, order service, payment service) running in separate containers. Implement service discovery and load balancing for inter-service communication.</p>



                            <h4>Features:</h4>



                            <ul class="wp-block-list">
                                <li>Multiple microservices with REST APIs</li>



                                <li>Service discovery using Consul or Eureka</li>



                                <li>API Gateway for routing requests</li>



                                <li>Load balancing across service instances</li>



                                <li>Centralized logging with ELK stack</li>



                                <li>Health checks and monitoring</li>
                            </ul>



                            <h4>Key Tools &amp; Libraries:</h4>



                            <ul class="wp-block-list">
                                <li>Docker &amp; Docker Compose</li>



                                <li>Spring Boot or Node.js for services</li>



                                <li>Consul or Netflix Eureka</li>



                                <li>Nginx or Kong API Gateway</li>



                                <li>PostgreSQL/MongoDB</li>



                                <li>Redis for caching</li>
                            </ul>

                            <h3>6. Monitoring Stack with Prometheus and Grafana</h3>



                            <p><strong>Project Details:</strong> Set up a complete monitoring solution using Prometheus for metrics collection and Grafana for visualization. Monitor Docker containers, host system metrics, and application-specific metrics with custom dashboards.</p>



                            <h4>Features:</h4>



                            <ul>
                                <li>Prometheus container for metrics scraping</li>



                                <li>Grafana for visualization dashboards</li>



                                <li>Node Exporter for host metrics</li>



                                <li>cAdvisor for container metrics</li>



                                <li>AlertManager for notifications</li>



                                <li>Pre-configured dashboards for common metrics</li>
                            </ul>



                            <h4 class="wp-block-heading" id="key-tools-libraries">Key Tools &amp; Libraries:</h4>



                            <ul class="wp-block-list">
                                <li>Docker &amp; Docker Compose</li>



                                <li>Prometheus</li>



                                <li>Grafana</li>



                                <li>Node Exporter</li>



                                <li>cAdvisor</li>



                                <li>AlertManager</li>
                            </ul>



                            <p><strong>Sample Source Code:</strong> <a href="https://medium.com/@ravipatel.it/building-a-monitoring-stack-with-prometheus-grafana-and-alerting-a-docker-compose-ef78127e4a19" target="_blank" rel="noreferrer noopener">[Link]</a></p>



                            <h2 class="wp-block-heading" id="advanced-docker-projects">Advanced Docker Projects</h2>



                            <h3 class="wp-block-heading" id="7-multi-stage-build-optimization-pipeline">7. Multi-Stage Build Optimization Pipeline</h3>



                            <p><strong>Project Details:</strong> Create an advanced build pipeline that uses multi-stage Docker builds to create minimal production images. This project focuses on optimizing image size, security, and build time for large-scale applications.</p>



                            <h4 class="wp-block-heading" id="features">Features:</h4>



                            <ul class="wp-block-list">
                                <li>Multi-stage Dockerfiles for different languages (Java, Python, Go)</li>



                                <li>Build cache optimization techniques</li>



                                <li>Security scanning with Trivy or Clair</li>



                                <li>Image size reduction from GBs to MBs</li>



                                <li>BuildKit features for parallel builds</li>



                                <li>Automated vulnerability scanning</li>



                                <li>Image signing and verification</li>
                            </ul>



                            <h4 class="wp-block-heading" id="key-tools-libraries">Key Tools &amp; Libraries:</h4>



                            <ul class="wp-block-list">
                                <li>Docker BuildKit</li>



                                <li>Trivy or Clair for security scanning</li>



                                <li>Docker Content Trust</li>



                                <li>Distroless or Alpine base images</li>



                                <li>Docker Registry with garbage collection</li>
                            </ul>



                            <p><strong>Sample Source Code:</strong> <a href="https://dev.to/er_dward/dockerfile-optimization-using-multistage-builds-caching-and-lightweight-images-2ec6" target="_blank" rel="noreferrer noopener">[Link]</a></p>



                            <h3 class="wp-block-heading" id="8-production-ready-kubernetes-migration">8. Production-Ready Kubernetes Migration</h3>



                            <p><strong>Project Details:</strong> Take a complex multi-container Docker Compose application and migrate it to Kubernetes for production deployment. This project covers the complete journey from local development to production-grade orchestration with high availability and auto-scaling.</p>



                            <h4 class="wp-block-heading" id="features">Features:</h4>



                            <ul class="wp-block-list">
                                <li>Convert Docker Compose files to Kubernetes manifests</li>



                                <li>Helm charts for application deployment</li>



                                <li>ConfigMaps and Secrets for configuration management</li>



                                <li>Horizontal Pod Autoscaling based on metrics</li>



                                <li>Ingress controller for external access</li>



                                <li>StatefulSets for databases with persistent volumes</li>



                                <li>Rolling updates and rollback strategies</li>



                                <li>Network policies for security</li>



                                <li>Resource limits and requests optimization</li>
                            </ul>



                            <h4 class="wp-block-heading" id="key-tools-libraries">Key Tools &amp; Libraries:</h4>



                            <ul class="wp-block-list">
                                <li>Docker &amp; Docker Compose</li>



                                <li>Kubernetes (Minikube/Kind for local, EKS/GKE/AKS for cloud)</li>



                                <li>Helm</li>



                                <li>Kubectl</li>



                                <li>Prometheus Operator</li>



                                <li>Ingress-Nginx</li>



                                <li>Cert-Manager for SSL</li>
                            </ul>



                            <p><strong>Sample Source Code:</strong> <a href="https://medium.com/@sriharimalapati/migrating-workloads-docker-compose-to-kubernetes-made-simple-5723df734fa7" target="_blank" rel="noreferrer noopener">[Link]</a></p>



                            <h2 class="wp-block-heading" id="also-check">Also Check:</h2>



                            <ul class="wp-block-list">
                                <li><a href="https://www.mygreatlearning.com/blog/docker-interview-question-and-answers/">Docker Interview Questions and Answers</a></li>



                                <li><a href="https://www.mygreatlearning.com/blog/top-essential-docker-commands/">Docker Commands</a></li>



                                <li><a href="https://www.mygreatlearning.com/blog/devops-interview-questions/">DevOps Interview Questions and Answers</a></li>



                                <li><a href="https://www.mygreatlearning.com/blog/essential-tools-for-devops-professionals/">Essential Tools for DevOps Professionals</a></li>



                                <li><a href="https://www.mygreatlearning.com/blog/top-skills-required-to-become-a-devops-engineer/">How to Become a DevOps Engineer?</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    {screenSize && screenSize.width > 768 && (
                     <div className="card_content">
            <Card className="p-4"><p><span className="bg-gray-100 px-4 py-2 rounded-sm text-[12px] font-semibold inline-flex gap-1 items-center"><ScrollText className="text-primary" /> Blog Categories</span></p>
              <ul>
                {allCategories.map((category) => (
                  <li key={category.name} className="bg-gray-100 mb-3 py-3 px-4 rounded-2xl">

                    <Link href={"/"} target="_blank" className="text-sm transition-all font-bold text-foreground  hover:text-primary flex items-center gap-4 justify-between">
                      <span className="line-clamp-1">  {category.name}</span>
                      <Badge className="px-1.5 rounded-full bg-foreground/7 text-foreground">
                        {category.count}
                      </Badge>
                    </Link>

                  </li>
                ))}




              </ul>
            </Card>
          </div>
          )}
                </div>
            </div>

        </div>
        <BlogMobileStickyFooter screenSize={screenSize} allCategories={allCategories} />
        </>
    )
}

export default Blogpage
