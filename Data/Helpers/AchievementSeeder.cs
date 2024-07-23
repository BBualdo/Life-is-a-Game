using Data.Models;

namespace Data.Helpers;

public class AchievementSeeder
{
  public static List<Achievement> GetAchievements()
  {
    var achievements = new List<Achievement>
    {
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Neon Novice",
        Requirements = "Complete 'How To Play'.",
        XpReward = 10,
        ImageUrl = "https://i.ibb.co/kGHYJvS/tutorial.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Mission Maverick",
        Requirements = "Add your first mission.",
        XpReward = 10,
        ImageUrl = "https://i.ibb.co/KLWDbWg/add-first.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Codebreaker Initiate",
        Requirements = "Complete your first mission.",
        XpReward = 25,
        ImageUrl = "https://i.ibb.co/473Z5Lr/complete-first.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Profile Overdrive",
        Requirements = "Complete every field in profile dashboard.",
        XpReward = 10,
        ImageUrl = "https://i.ibb.co/DGLpVZx/profile.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Daily Data Dynamo",
        Requirements = "Complete mission on 'Daily' difficulty.",
        XpReward = 25,
        ImageUrl = "https://i.ibb.co/RCYg2d5/daily.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Sweat-Proof Runner",
        Requirements = "Complete mission on 'Drop of Sweat' difficulty.",
        XpReward = 50,
        ImageUrl = "https://i.ibb.co/c3Nntzw/drop-of-sweat.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Chaos Conqueror",
        Requirements = "Complete mission on 'Challenging' difficulty.",
        XpReward = 75,
        ImageUrl = "https://i.ibb.co/zfBdvCS/challenging.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Life-Hacker Elite",
        Requirements = "Complete mission on 'Life-Hacker' difficulty.",
        XpReward = 100,
        ImageUrl = "https://i.ibb.co/PxmwFbt/life-hacker.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Procrastination Purged",
        Requirements = "Complete mission on 'Anti-Procrastinator' difficulty.",
        XpReward = 250,
        ImageUrl = "https://i.ibb.co/R7WxLcr/anti-procrastinator.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Difficulty Dominator",
        Requirements = "Complete mission on every difficulty level.",
        XpReward = 200,
        ImageUrl = "https://i.ibb.co/12Y97TW/every-difficulty.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Strategic Surrender",
        Requirements = "Give up a mission with at least one subtask completed.",
        XpReward = 25,
        ImageUrl = "https://i.ibb.co/X3JvBZQ/give-up.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Mission Maestro",
        Requirements = "Complete 5 missions.",
        XpReward = 50,
        ImageUrl = "https://i.ibb.co/sF4BDHg/missions5.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Deca-Task Dynamo",
        Requirements = "Complete 10 missions.",
        XpReward = 100,
        ImageUrl = "https://i.ibb.co/Jp6PCT0/missions10.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Quarter Century Quasar",
        Requirements = "Complete 25 missions.",
        XpReward = 250,
        ImageUrl = "https://i.ibb.co/rdQ2QkM/missions25.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Half Century Hero",
        Requirements = "Complete 50 missions.",
        XpReward = 500,
        ImageUrl = "https://i.ibb.co/zbKH66t/missions50.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Level 5 Luminary",
        Requirements = "Reach level 5.",
        XpReward = 50,
        ImageUrl = "https://i.ibb.co/PcKjDDX/level5.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Deca-Level Dynamo",
        Requirements = "Reach level 10.",
        XpReward = 100,
        ImageUrl = "https://i.ibb.co/6vP8FXv/level10.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Quarter Century Cipher",
        Requirements = "Reach level 25.",
        XpReward = 250,
        ImageUrl = "https://i.ibb.co/Qcbyf2s/level25.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Half Century Hacker",
        Requirements = "Reach level 50.",
        XpReward = 500,
        ImageUrl = "https://i.ibb.co/XDhBYzR/level50.jpg"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Achievement Unleashed",
        Requirements = "Unlock every achievement.",
        XpReward = 2500,
        ImageUrl = "https://i.ibb.co/tZDHcyJ/all-achievements.jpg"
      }
    };
    return achievements;
  }
}