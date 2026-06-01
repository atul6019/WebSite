"""
Component-level Tests for WebSite React Components
Tests the structure and accessibility of React components
"""

import json
from pathlib import Path


class TestComponentFiles:
    """Test that all component files exist and are valid"""
    
    def test_header_component_exists(self):
        """Verify Header component exists"""
        assert Path("src/components/Header.tsx").exists(), "Header.tsx not found"
    
    def test_footer_component_exists(self):
        """Verify Footer component exists"""
        assert Path("src/components/Footer.tsx").exists(), "Footer.tsx not found"
    
    def test_hero_component_exists(self):
        """Verify Hero component exists"""
        assert Path("src/components/Hero.tsx").exists(), "Hero.tsx not found"
    
    def test_cards_component_exists(self):
        """Verify Cards component exists"""
        assert Path("src/components/Cards.tsx").exists(), "Cards.tsx not found"
    
    def test_inquiry_form_component_exists(self):
        """Verify InquiryForm component exists"""
        assert Path("src/components/InquiryForm.tsx").exists(), "InquiryForm.tsx not found"
    
    def test_motion_component_exists(self):
        """Verify Motion component exists"""
        assert Path("src/components/Motion.tsx").exists(), "Motion.tsx not found"


class TestComponentContent:
    """Test component content and structure"""
    
    def test_header_uses_client_side(self):
        """Verify Header is a client component"""
        with open("src/components/Header.tsx", "r") as f:
            content = f.read()
        assert '"use client"' in content, "Header should use 'use client' directive"
    
    def test_form_uses_client_side(self):
        """Verify InquiryForm is a client component"""
        with open("src/components/InquiryForm.tsx", "r") as f:
            content = f.read()
        assert '"use client"' in content, "InquiryForm should use 'use client' directive"
    
    def test_cards_exports_functions(self):
        """Verify Cards component exports required functions"""
        with open("src/components/Cards.tsx", "r") as f:
            content = f.read()
        assert "export function ProductCard" in content, "Cards should export ProductCard"
        assert "export function ServiceCard" in content, "Cards should export ServiceCard"
    
    def test_hero_exports_function(self):
        """Verify Hero component exports function"""
        with open("src/components/Hero.tsx", "r") as f:
            content = f.read()
        assert "export function Hero" in content, "Hero should export Hero function"
    
    def test_form_has_schema_validation(self):
        """Verify InquiryForm has Zod schema"""
        with open("src/components/InquiryForm.tsx", "r") as f:
            content = f.read()
        assert "z.object" in content, "Form should use Zod for validation"
        assert "zodResolver" in content, "Form should use zodResolver"


class TestComponentImports:
    """Test component imports are correct"""
    
    def test_header_imports_necessary_modules(self):
        """Verify Header imports necessary modules"""
        with open("src/components/Header.tsx", "r") as f:
            content = f.read()
        assert "from 'react'" in content, "Header should import from react"
        assert "from 'next/link'" in content, "Header should import Link from next"
    
    def test_hero_imports_image(self):
        """Verify Hero imports Image component"""
        with open("src/components/Hero.tsx", "r") as f:
            content = f.read()
        assert "from 'next/image'" in content, "Hero should import Image from next"
    
    def test_cards_imports_types(self):
        """Verify Cards imports type definitions"""
        with open("src/components/Cards.tsx", "r") as f:
            content = f.read()
        assert "from '@/types/content'" in content, "Cards should import from types"
        assert "type Product" in content or "Product" in content, "Cards should use Product type"
        assert "type Service" in content or "Service" in content, "Cards should use Service type"
    
    def test_form_imports_hook_form(self):
        """Verify InquiryForm imports react-hook-form"""
        with open("src/components/InquiryForm.tsx", "r") as f:
            content = f.read()
        assert "from 'react-hook-form'" in content, "Form should import from react-hook-form"
        assert "from 'zod'" in content, "Form should import from zod"


class TestAppFiles:
    """Test main app files"""
    
    def test_layout_file_exists(self):
        """Verify layout.tsx exists"""
        assert Path("src/app/layout.tsx").exists(), "layout.tsx not found"
    
    def test_page_file_exists(self):
        """Verify page.tsx exists"""
        assert Path("src/app/page.tsx").exists(), "page.tsx not found"
    
    def test_layout_has_metadata(self):
        """Verify layout.tsx exports metadata"""
        with open("src/app/layout.tsx", "r") as f:
            content = f.read()
        assert "export const metadata" in content, "Layout should export metadata"
    
    def test_layout_exports_root_layout(self):
        """Verify layout.tsx exports RootLayout"""
        with open("src/app/layout.tsx", "r") as f:
            content = f.read()
        assert "export default function RootLayout" in content, "Layout should export RootLayout"
    
    def test_page_exports_home(self):
        """Verify page.tsx exports Home component"""
        with open("src/app/page.tsx", "r") as f:
            content = f.read()
        assert "export default function Home" in content, "Page should export Home function"


class TestAppStructure:
    """Test app directory structure"""
    
    def test_required_app_directories_exist(self):
        """Verify required subdirectories exist"""
        required_dirs = [
            "src/app/api",
            "src/app/blog",
            "src/app/contact",
            "src/app/products",
            "src/app/services",
            "src/app/portfolio"
        ]
        for dir_path in required_dirs:
            assert Path(dir_path).exists(), f"Missing directory: {dir_path}"
            assert Path(dir_path).is_dir(), f"{dir_path} should be a directory"
    
    def test_global_css_exists(self):
        """Verify globals.css exists"""
        assert Path("src/app/globals.css").exists(), "globals.css not found"
    
    def test_robots_config_exists(self):
        """Verify robots.ts exists"""
        assert Path("src/app/robots.ts").exists(), "robots.ts not found"
    
    def test_sitemap_config_exists(self):
        """Verify sitemap.ts exists"""
        assert Path("src/app/sitemap.ts").exists(), "sitemap.ts not found"


class TestMetadata:
    """Test metadata and SEO configuration"""
    
    def test_layout_metadata_has_required_fields(self):
        """Verify layout has all required metadata fields"""
        with open("src/app/layout.tsx", "r") as f:
            content = f.read()
        
        required_fields = [
            "title:",
            "description:",
            "keywords:",
            "openGraph:",
            "robots:"
        ]
        
        for field in required_fields:
            assert field in content, f"Layout should have {field} in metadata"
    
    def test_robots_is_configured(self):
        """Verify robots.ts is configured"""
        with open("src/app/robots.ts", "r") as f:
            content = f.read()
        assert "Metadata" in content or "export" in content, "robots.ts should export metadata"
    
    def test_sitemap_is_configured(self):
        """Verify sitemap.ts is configured"""
        with open("src/app/sitemap.ts", "r") as f:
            content = f.read()
        assert "Metadata" in content or "export" in content, "sitemap.ts should export metadata"


if __name__ == "__main__":
    print("Run component tests using: pytest tests/test_components.py -v")
