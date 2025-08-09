// LinkedIn Profile Analyzer - AI Logic
class LinkedInAnalyzer {
    constructor() {
        this.form = document.getElementById('analyzeForm');
        this.loadingContainer = document.getElementById('loadingContainer');
        this.resultsContainer = document.getElementById('resultsContainer');
        this.analyzeBtn = document.getElementById('analyzeBtn');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.analyzeProfile();
        });
    }

    async analyzeProfile() {
        const linkedinUrl = document.getElementById('linkedinUrl').value;
        
        if (!this.isValidLinkedInUrl(linkedinUrl)) {
            alert('Por favor, insira um URL válido do LinkedIn');
            return;
        }

        this.showLoading();
        
        // Simular análise de IA com steps
        await this.simulateAnalysis();
        
        // Gerar análise baseada no URL
        const analysis = this.generateAnalysis(linkedinUrl);
        
        this.showResults(analysis);
    }

    isValidLinkedInUrl(url) {
        const linkedinPattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/;
        return linkedinPattern.test(url);
    }

    showLoading() {
        this.form.style.display = 'none';
        this.loadingContainer.style.display = 'block';
        this.resultsContainer.style.display = 'none';
    }

    async simulateAnalysis() {
        const steps = ['step1', 'step2', 'step3'];
        
        for (let i = 0; i < steps.length; i++) {
            // Remove active class from all steps
            steps.forEach(step => {
                document.getElementById(step).classList.remove('active');
            });
            
            // Add active class to current step
            document.getElementById(steps[i]).classList.add('active');
            
            // Wait for animation
            await new Promise(resolve => setTimeout(resolve, 1500));
        }
    }

    generateAnalysis(url) {
        // Simular análise baseada em diferentes aspectos do perfil
        const profileName = this.extractProfileName(url);
        
        return {
            overallScore: this.generateRandomScore(65, 85),
            profileName: profileName,
            sections: {
                photo: this.generatePhotoAnalysis(),
                headline: this.generateHeadlineAnalysis(),
                experience: this.generateExperienceAnalysis(),
                education: this.generateEducationAnalysis(),
                skills: this.generateSkillsAnalysis(),
                network: this.generateNetworkAnalysis()
            },
            priorityActions: this.generatePriorityActions()
        };
    }

    extractProfileName(url) {
        const match = url.match(/\/in\/([\w-]+)/);
        return match ? match[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Usuário';
    }

    generateRandomScore(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generatePhotoAnalysis() {
        const recommendations = [
            'Use uma foto profissional com boa iluminação e fundo neutro',
            'Mantenha contato visual direto com a câmera',
            'Vista roupas adequadas ao seu setor profissional',
            'Evite fotos em grupo ou muito casuais',
            'Certifique-se de que seu rosto ocupe 60% da imagem'
        ];

        return {
            score: this.generateRandomScore(6, 9),
            recommendations: this.selectRandomRecommendations(recommendations, 3)
        };
    }

    generateHeadlineAnalysis() {
        const recommendations = [
            'Inclua palavras-chave relevantes para sua área',
            'Mencione sua especialização principal',
            'Use números e resultados quando possível',
            'Mantenha entre 120-220 caracteres',
            'Evite jargões muito técnicos',
            'Destaque seu valor único no mercado'
        ];

        return {
            score: this.generateRandomScore(5, 8),
            recommendations: this.selectRandomRecommendations(recommendations, 4)
        };
    }

    generateExperienceAnalysis() {
        const recommendations = [
            'Detalhe suas principais conquistas com métricas',
            'Use verbos de ação no início das descrições',
            'Inclua projetos relevantes e resultados obtidos',
            'Mantenha descrições entre 3-5 linhas por cargo',
            'Atualize regularmente suas experiências',
            'Destaque tecnologias e ferramentas utilizadas'
        ];

        return {
            score: this.generateRandomScore(6, 9),
            recommendations: this.selectRandomRecommendations(recommendations, 4)
        };
    }

    generateEducationAnalysis() {
        const recommendations = [
            'Adicione certificações relevantes para sua área',
            'Inclua cursos online de plataformas reconhecidas',
            'Mencione projetos acadêmicos importantes',
            'Atualize com educação continuada',
            'Destaque honras e reconhecimentos acadêmicos'
        ];

        return {
            score: this.generateRandomScore(7, 9),
            recommendations: this.selectRandomRecommendations(recommendations, 3)
        };
    }

    generateSkillsAnalysis() {
        const recommendations = [
            'Adicione pelo menos 10 habilidades relevantes',
            'Priorize skills técnicas da sua área',
            'Inclua tanto hard skills quanto soft skills',
            'Peça endorsements de colegas e supervisores',
            'Mantenha habilidades atualizadas com o mercado',
            'Use palavras-chave que recrutadores buscam'
        ];

        return {
            score: this.generateRandomScore(5, 8),
            recommendations: this.selectRandomRecommendations(recommendations, 4)
        };
    }

    generateNetworkAnalysis() {
        const recommendations = [
            'Conecte-se com profissionais da sua área',
            'Participe ativamente de grupos do LinkedIn',
            'Publique conteúdo relevante regularmente',
            'Comente e interaja com posts de outros profissionais',
            'Compartilhe insights e conhecimentos',
            'Mantenha um networking ativo e genuíno'
        ];

        return {
            score: this.generateRandomScore(4, 7),
            recommendations: this.selectRandomRecommendations(recommendations, 4)
        };
    }

    generatePriorityActions() {
        const actions = [
            'Otimize sua headline com palavras-chave específicas da sua área',
            'Adicione métricas quantificáveis às suas experiências profissionais',
            'Solicite recomendações de ex-supervisores e colegas',
            'Publique pelo menos 2 posts por semana sobre sua área de expertise',
            'Complete todas as seções do perfil para alcançar 100% de completude',
            'Participe de grupos relevantes e contribua com discussões'
        ];

        return this.selectRandomRecommendations(actions, 4);
    }

    selectRandomRecommendations(recommendations, count) {
        const shuffled = [...recommendations].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    showResults(analysis) {
        this.loadingContainer.style.display = 'none';
        this.resultsContainer.style.display = 'block';

        // Update overall score
        this.animateScore('overallScore', analysis.overallScore);
        
        // Update score description
        const scoreDescription = this.getScoreDescription(analysis.overallScore);
        document.getElementById('scoreDescription').textContent = scoreDescription;

        // Update section scores and recommendations
        this.updateSection('photo', analysis.sections.photo);
        this.updateSection('headline', analysis.sections.headline);
        this.updateSection('experience', analysis.sections.experience);
        this.updateSection('education', analysis.sections.education);
        this.updateSection('skills', analysis.sections.skills);
        this.updateSection('network', analysis.sections.network);

        // Update priority actions
        this.updatePriorityActions(analysis.priorityActions);

        // Scroll to results
        this.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    animateScore(elementId, targetScore) {
        const element = document.getElementById(elementId);
        let currentScore = 0;
        const increment = targetScore / 50;
        
        const animation = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(animation);
            }
            element.textContent = Math.round(currentScore);
        }, 30);
    }

    getScoreDescription(score) {
        if (score >= 80) return 'Excelente! Seu perfil está muito bem otimizado.';
        if (score >= 70) return 'Bom perfil! Algumas melhorias podem aumentar sua visibilidade.';
        if (score >= 60) return 'Perfil razoável. Há várias oportunidades de melhoria.';
        return 'Perfil precisa de otimização significativa para melhores resultados.';
    }

    updateSection(sectionName, sectionData) {
        // Update score badge
        document.getElementById(`${sectionName}Score`).textContent = `${sectionData.score}/10`;
        
        // Update score badge color
        const badge = document.getElementById(`${sectionName}Score`);
        if (sectionData.score >= 8) badge.style.background = '#28a745';
        else if (sectionData.score >= 6) badge.style.background = '#ffc107';
        else badge.style.background = '#dc3545';

        // Update recommendations
        const recommendationsList = document.getElementById(`${sectionName}Recommendations`);
        recommendationsList.innerHTML = '';
        
        sectionData.recommendations.forEach(recommendation => {
            const li = document.createElement('li');
            li.textContent = recommendation;
            recommendationsList.appendChild(li);
        });
    }

    updatePriorityActions(actions) {
        const container = document.getElementById('priorityActions');
        container.innerHTML = '';

        actions.forEach((action, index) => {
            const actionDiv = document.createElement('div');
            actionDiv.className = 'priority-action';
            actionDiv.innerHTML = `
                <div class="priority-number">${index + 1}</div>
                <div>${action}</div>
            `;
            container.appendChild(actionDiv);
        });
    }
}

// Export functions
function exportToPDF() {
    // Simular exportação para PDF
    alert('Funcionalidade de exportação para PDF será implementada em breve!');
}

function analyzeAgain() {
    document.getElementById('analyzeForm').style.display = 'block';
    document.getElementById('loadingContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('linkedinUrl').value = '';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize the analyzer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LinkedInAnalyzer();
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to analysis cards
    const cards = document.querySelectorAll('.analysis-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add input validation feedback
    const urlInput = document.getElementById('linkedinUrl');
    urlInput.addEventListener('input', (e) => {
        const url = e.target.value;
        const isValid = /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/.test(url);
        
        if (url && !isValid) {
            e.target.style.borderColor = '#dc3545';
        } else {
            e.target.style.borderColor = '#e1e8ed';
        }
    });
});

// Add some utility functions for better UX
function showTooltip(element, message) {
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 0.9rem;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
    
    // Show tooltip
    setTimeout(() => tooltip.style.opacity = '1', 10);
    
    // Remove tooltip after delay
    setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => document.body.removeChild(tooltip), 300);
    }, 3000);
}

// Performance optimization: Lazy load animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to elements when they're created
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.analysis-card, .action-plan');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
