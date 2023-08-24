import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Senior Software Engineer</div>
							<div className="work-subtitle">
								obion GmbH, Frankfurt am Main, Germany
								<br />
								<a href="https://www.obion.de/" target="_blank" rel="noreferrer">
									www.obion.de
								</a>
							</div>
							<div className="work-duration">09/2019 – 09/2023</div>
						</div>

						<div className="work-desc">
							Supply engineering services and solutions with the following main focuses:
							<ul>
								<li>Software development in C#, VB.Net, ASP.Net, SQLServer, Oracle, PowerShell, SSRS and SSIS</li>
								<li>Integration of MES in the PLS world / programming of interface software.</li>
								<li>Configuration of process control systems (Honeywell EPKS, Siemens PCS7)</li>
								<li>Consulting</li>
							</ul>
							Skills: .NET · C# · SQL Server · .NET Framework · ADO/ADO.NET . Oracle

						</div>

						<div className="work">
							<div className="work-title">Senior Full Stack Developer</div>
							<div className="work-subtitle">
								Denven, UK, London
								<br />
								<a href="https://www.denven.com" target="_blank" rel="noreferrer">
									www.denven.com
								</a>
							</div>
							<div className="work-duration">02/2021 – 11/2023</div>
						</div>

						<div className="work-desc">
							As COVID-19 comes, I have a lot of free time after work time, so I started to develop an enterprise inventory software solution with one of my friends who lives in London. It was Cloud-based solutions (Azure) multi container app with the power of AI, Git, CI/CD on DevOps and ready to scale.

							
							Skills: Microsoft Azure · .NET · C# · SQL Server · .NET Framework · ADO/ADO.NET
						</div>
						<div className="work">
							<div className="work-title">Senior Full Stack Developer</div>
							<div className="work-subtitle">
								Pardazesh Negar Rashin, Tehran, Iran
							</div>
							<div className="work-duration">04/2016 – 07/2019</div>
						</div>

						<div className="work-desc">
							Collaborating with other members of team based on Scrum framework on 3 projects:
							<ul style={{ 'listStyleType': 'decimal' }}>
								<li>Building a CMS which is able to create applications that serve to clients (e.g., Web, Android & iOS ).</li>
								<li>Designing a Mobile Backend as a service (MBaaS) that powered 4 games.</li>
								<li>Developing a live tracking system using On-Board Diagnostics (OBD) socket server based on .Net Core as the base platform and Message Broker (MSMQ) to handle communications between our socket server and IoT nodes.</li>
							</ul>

							<ul>
								<li>Design and development of database structure using SqlServer and implement interfaces with Dapper, Ado.net, Asp.net Web API, and C# in clients RESTFul APIs.</li>
								<li>Taking responsibilities as technical consultant, stress test performer and performance optimizer.</li>
							</ul>

						</div>

						<div className="work">
							<div className="work-title">Cross Platform Developer</div>
							<div className="work-subtitle">
								MediaStudio, Tehran, Iran
							</div>
							<div className="work-duration">09/2015 - 04/2016</div>
						</div>

						<div className="work-desc">
							I participated in building a "Game Center" in which I developed a Unity SDK using C#, Mono and Xamarin for connecting to a MMO server and also developing a server plugin with Java and Intelij IDEA.
							Designed and developed user membership, leader boards, subscription, and rooms with dynamic matching rules and properties. Also there I had an opportunity to develop my first iOS app with Swift language.
						</div>

						<div className="work">
							<div className="work-title">Full Stack Developer</div>
							<div className="work-subtitle">
								Oxin Ltd, Tehran, Iran
								<br />
								<a href="https://www.oxinltd.com" target="_blank" rel="noreferrer">
									www.oxinltd.com
								</a>
							</div>
							<div className="work-duration">01/2011 - 09/2015</div>
						</div>

						<div className="work-desc">
							This was my first specialized experience as a full-stack developer. Developing and maintaining an online game that included a game engine based on Asp.net and Winform, and also a secured CMS using Asp.net MVC, C#.
							I also took such responsibilities as R&D, analysis and training colleagues as well as maintaining, refactoring and modifying existing codes to detect issues and performance bottlenecks.
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
