﻿// <auto-generated />
using System;
using Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Data.Migrations
{
    [DbContext(typeof(LiagDbContext))]
    partial class LiagDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Data.Models.Achievement", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ImageUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Requirements")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("nvarchar(60)");

                    b.Property<int>("XpReward")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Achievements");

                    b.HasData(
                        new
                        {
                            Id = new Guid("ad79c52e-67f3-4a43-8110-31963c73e93b"),
                            ImageUrl = "https://i.ibb.co/kGHYJvS/tutorial.jpg",
                            Requirements = "Complete 'How To Play'.",
                            Title = "Neon Novice",
                            XpReward = 10
                        },
                        new
                        {
                            Id = new Guid("3ead240b-0e27-4dce-94ab-935b904e42ef"),
                            ImageUrl = "https://i.ibb.co/KLWDbWg/add-first.jpg",
                            Requirements = "Add your first mission.",
                            Title = "Mission Maverick",
                            XpReward = 10
                        },
                        new
                        {
                            Id = new Guid("df390ad4-49a8-4b39-be97-7eb027ca305d"),
                            ImageUrl = "https://i.ibb.co/473Z5Lr/complete-first.jpg",
                            Requirements = "Complete your first mission.",
                            Title = "Codebreaker Initiate",
                            XpReward = 25
                        },
                        new
                        {
                            Id = new Guid("09b43108-64aa-44a8-80cc-aeec90153e60"),
                            ImageUrl = "https://i.ibb.co/DGLpVZx/profile.jpg",
                            Requirements = "Complete every field in profile dashboard.",
                            Title = "Profile Overdrive",
                            XpReward = 10
                        },
                        new
                        {
                            Id = new Guid("b1ba83e9-4ddd-424c-b597-ad45cf1f1e73"),
                            ImageUrl = "https://i.ibb.co/RCYg2d5/daily.jpg",
                            Requirements = "Complete mission on 'Daily' difficulty.",
                            Title = "Daily Data Dynamo",
                            XpReward = 25
                        },
                        new
                        {
                            Id = new Guid("9426edb6-cbc1-4047-bb2e-c899b0e4f878"),
                            ImageUrl = "https://i.ibb.co/c3Nntzw/drop-of-sweat.jpg",
                            Requirements = "Complete mission on 'Drop of Sweat' difficulty.",
                            Title = "Sweat-Proof Runner",
                            XpReward = 50
                        },
                        new
                        {
                            Id = new Guid("21ac2513-3ce1-4c8c-9477-376897e0c817"),
                            ImageUrl = "https://i.ibb.co/zfBdvCS/challenging.jpg",
                            Requirements = "Complete mission on 'Challenging' difficulty.",
                            Title = "Chaos Conqueror",
                            XpReward = 75
                        },
                        new
                        {
                            Id = new Guid("b09ce195-8678-45c1-b9fe-a4ee725bb8b8"),
                            ImageUrl = "https://i.ibb.co/PxmwFbt/life-hacker.jpg",
                            Requirements = "Complete mission on 'Life-Hacker' difficulty.",
                            Title = "Life-Hacker Elite",
                            XpReward = 100
                        },
                        new
                        {
                            Id = new Guid("73fa8aed-868f-4181-9e7c-edc9eb7d777a"),
                            ImageUrl = "https://i.ibb.co/R7WxLcr/anti-procrastinator.jpg",
                            Requirements = "Complete mission on 'Anti-Procrastinator' difficulty.",
                            Title = "Procrastination Purged",
                            XpReward = 250
                        },
                        new
                        {
                            Id = new Guid("1b088116-543a-4eca-8f2e-f6188a76ba17"),
                            ImageUrl = "https://i.ibb.co/12Y97TW/every-difficulty.jpg",
                            Requirements = "Complete mission on every difficulty level.",
                            Title = "Difficulty Dominator",
                            XpReward = 200
                        },
                        new
                        {
                            Id = new Guid("308d1d92-8035-47e6-a238-dd3d3db8db41"),
                            ImageUrl = "https://i.ibb.co/X3JvBZQ/give-up.jpg",
                            Requirements = "Give up a mission with at least one subtask completed.",
                            Title = "Strategic Surrender",
                            XpReward = 25
                        },
                        new
                        {
                            Id = new Guid("124573bc-ac58-487c-b0a8-2130782945f3"),
                            ImageUrl = "https://i.ibb.co/sF4BDHg/missions5.jpg",
                            Requirements = "Complete 5 missions.",
                            Title = "Mission Maestro",
                            XpReward = 50
                        },
                        new
                        {
                            Id = new Guid("7215696c-12e2-4f44-943d-8365ae615fd3"),
                            ImageUrl = "https://i.ibb.co/Jp6PCT0/missions10.jpg",
                            Requirements = "Complete 10 missions.",
                            Title = "Deca-Task Dynamo",
                            XpReward = 100
                        },
                        new
                        {
                            Id = new Guid("ab51a9b3-fb28-4ee8-ba95-7adf7ae2fcfd"),
                            ImageUrl = "https://i.ibb.co/rdQ2QkM/missions25.jpg",
                            Requirements = "Complete 25 missions.",
                            Title = "Quarter Century Quasar",
                            XpReward = 250
                        },
                        new
                        {
                            Id = new Guid("739e4ef4-c483-4e7c-972e-3ae07d842cf3"),
                            ImageUrl = "https://i.ibb.co/zbKH66t/missions50.jpg",
                            Requirements = "Complete 50 missions.",
                            Title = "Half Century Hero",
                            XpReward = 500
                        },
                        new
                        {
                            Id = new Guid("771f78b2-ce92-4f2e-8abf-8e82264d18cf"),
                            ImageUrl = "https://i.ibb.co/PcKjDDX/level5.jpg",
                            Requirements = "Reach level 5.",
                            Title = "Level 5 Luminary",
                            XpReward = 50
                        },
                        new
                        {
                            Id = new Guid("d520ca39-4ca1-45e8-8748-b6052a95fcc6"),
                            ImageUrl = "https://i.ibb.co/6vP8FXv/level10.jpg",
                            Requirements = "Reach level 10.",
                            Title = "Deca-Level Dynamo",
                            XpReward = 100
                        },
                        new
                        {
                            Id = new Guid("77d71d19-b756-4d51-a456-1e7c912d2f32"),
                            ImageUrl = "https://i.ibb.co/Qcbyf2s/level25.jpg",
                            Requirements = "Reach level 25.",
                            Title = "Quarter Century Cipher",
                            XpReward = 250
                        },
                        new
                        {
                            Id = new Guid("922ee236-1547-4d8f-ba09-13feb87bcd5a"),
                            ImageUrl = "https://i.ibb.co/XDhBYzR/level50.jpg",
                            Requirements = "Reach level 50.",
                            Title = "Half Century Hacker",
                            XpReward = 500
                        },
                        new
                        {
                            Id = new Guid("3fb91549-da81-407f-addb-c631531cb3df"),
                            ImageUrl = "https://i.ibb.co/tZDHcyJ/all-achievements.jpg",
                            Requirements = "Unlock every achievement.",
                            Title = "Achievement Unleashed",
                            XpReward = 2500
                        });
                });

            modelBuilder.Entity("Data.Models.ErrorLog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("Date")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.HasKey("Id");

                    b.ToTable("ErrorLogs");
                });

            modelBuilder.Entity("Data.Models.Mission", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CompletedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("CreatedAt")
                        .IsRequired()
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasMaxLength(2000)
                        .HasColumnType("nvarchar(2000)");

                    b.Property<int>("Difficulty")
                        .HasColumnType("int");

                    b.Property<bool>("IsCompleted")
                        .HasColumnType("bit");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("XpReward")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Missions");
                });

            modelBuilder.Entity("Data.Models.Subtask", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("IsCompleted")
                        .HasColumnType("bit");

                    b.Property<Guid>("MissionId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("MissionId");

                    b.ToTable("Subtasks");
                });

            modelBuilder.Entity("Data.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("AvatarUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Bio")
                        .HasMaxLength(2000)
                        .HasColumnType("nvarchar(2000)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CurrentGoal")
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FacebookId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasMaxLength(24)
                        .HasColumnType("nvarchar(24)");

                    b.Property<string>("GithubId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GoogleId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("HasCompletedTutorial")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .HasMaxLength(32)
                        .HasColumnType("nvarchar(32)");

                    b.Property<int>("Level")
                        .HasColumnType("int");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TotalMissionsAdded")
                        .HasColumnType("int");

                    b.Property<int>("TotalMissionsCompleted")
                        .HasColumnType("int");

                    b.Property<int>("TotalXpGained")
                        .HasColumnType("int");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<int>("Xp")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("Data.Models.UserAchievement", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("AchievementId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("UnlockedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("UserAchievements");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("Data.Models.Subtask", b =>
                {
                    b.HasOne("Data.Models.Mission", null)
                        .WithMany("Subtasks")
                        .HasForeignKey("MissionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Data.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Data.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Data.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Data.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Data.Models.Mission", b =>
                {
                    b.Navigation("Subtasks");
                });
#pragma warning restore 612, 618
        }
    }
}
