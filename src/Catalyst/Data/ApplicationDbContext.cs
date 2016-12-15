using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Catalyst.Models;

namespace Catalyst.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Warehouse> Warehouses { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<WarehouseItem> WarehouseItems { get; set; }
        public DbSet<VendorItem> VendorItems { get; set; }
        public DbSet<UserItem> UserItems { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<WarehouseItem>().HasKey(x => new { x.WarehouseId, x.ItemId });
            builder.Entity<VendorItem>().HasKey(x => new { x.VendorId, x.ItemId });
            builder.Entity<UserItem>().HasKey(x => new { x.UserId, x.ItemId });
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
    }
}
